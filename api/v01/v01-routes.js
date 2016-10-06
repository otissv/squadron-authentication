/*
* Application routes
*/

'use strict';
'use strict';

import { apolloServer } from 'apollo-server';
import schema from './schemas';
import resolvers from './resolvers';
import connectors from './connectors';
import ERROR from './errors/errors';


function apolloConfig ({ context, mock, req }) {
  return {
    schema: schema,
    resolvers: resolvers,
    connectors: connectors(mock),
    context: {
      req,
      ...context
    }
  };
}


export default function authRoutes (app, context) {

  app.use('/v01/errors', (req, res) => {
    return res.json(ERROR);
  });

  app.use('/v01/graphql', apolloServer(req => {
    const mock = req.body.mock === 'true' ? true : false;

    return apolloConfig({ context, mock, req });
  }));

  // admin only route
  app.use('/v01/graphiql', apolloServer(req => {
    const mock = req.body.mock === 'true' ? true : false;
    const graphiql = true;

    return {
      ...apolloConfig({ context, mock, req }),
      graphiql
    };
  }));
}
