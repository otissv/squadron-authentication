/*
* Application enviorments config
*/

'use strict';

import development from './development-env.js';
import production from './production-env.js';


function getConfig (app) {
  switch (app.get('env')) {
    case 'development':
      return development;
    case 'production':
      return production;
    default:
      throw new Error('Unknow execption Enviorment:');
  }
};

export default function env (app) {
  const config = getConfig(app);
  /*
  *Application variables
  */
  app.set('baseURL', config.baseURL);
  app.set('shuttingDown', false);
  app.locals = {...app.locals, ...config};
};
