/*
* Application routes
*/

'use strict';
'use strict';

import { apolloServer } from 'apollo-server';
import connectors from './v01-auth-connectors';
import validation from './v01-auth-validation';
import resolvers from './v01-auth-resolvers';
import schema from './v01-auth-schemas';
import ERROR from './error/error';


function apolloConfig ({ context, mock, req, locals }) {
  return {
    schema: schema,
    resolvers: resolvers,
    connectors: connectors(mock),
    context: {
      ...context,
      locals,
      req,
      validation
    }
  };
}


export default function authRoutes (app, context) {
  const locals = app.locals;

  app.use('/v01/errors', (req, res) => {
    return res.json(ERROR);
  });

  app.use('/v01/graphql', apolloServer(req => {
    /* eslint-disable no-unneeded-ternary */
    const mock = req.body.mock === 'true' ? true : false;
    /* eslint-enable no-unneeded-ternary */

    return apolloConfig({ context, mock, req, locals });
  }));

  // admin only route
  app.use('/v01/graphiql', apolloServer(req => {
    /* eslint-disable no-unneeded-ternary */
    const mock = req.body.mock === 'true' ? true : false;
    /* eslint-enable no-unneeded-ternary */

    const graphiql = true;

    return {
      ...apolloConfig({ context, mock, req, locals }),
      graphiql
    };
  }));
}
