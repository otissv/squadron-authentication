'use strict';

import databases from './databases';
import env from './env/env';
import middleware from './middleware/middleware-index';
import routes from './routes';


export default function (app, express) {
  env(app);
  middleware(app, express);
  routes(app, {
    databases: {
      redis: databases.redis.connect(app.locals.redis),
      mongodb: databases.mongodb.connect(app.locals.mongodb.uri)
    },
    locals: app.locals
  });
};
