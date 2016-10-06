/*
* Application routes
*/

'use strict';
import v01Routes from '../api/v01/v01-routes';

function apolloConfig ({ context, mock, req }) {
  return {
    schema: schema,
    resolvers: resolvers,
    connectors: connectors(mock),
    context: {
      req,
      ...context
    }
  }
}

export default function routes (app, context) {
  app.route('/').get((req, res) => {
    return res.status(403).send('403 Forbidden');
  });

  v01Routes(app, context);
}
