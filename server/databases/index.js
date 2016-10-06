/*
* Database connections
*/

'use strict';

import mongodb from './mongodb';
import redis from './redis';

const databases = {
  mongodb: mongodb,
  redis: redis
};

export default databases;
