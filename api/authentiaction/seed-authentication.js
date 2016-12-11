'use strict';
import R from 'ramda';
import mapPromise from 'map-async-promise';
import databases from './../../../server/databases';
import development from '../../../server/env/development-env';
import { authentiactionsMock } from './authentiaction-mock';
import {
  promise,
  generateHash,
  generateToken
} from '../../../../squadron-utils';
import { TOKEN } from '../../../secret';
import { env } from '../../../server/env/environment.js';
import redis from '../../../server/databases/redis';


const client = redis.connect(env().redis);


const seedDB = (resolve, reject, item, index, arr) => {
  const KEY = `authentiaction:${item.client}:${item.data.id}`;

  const data = {
    ...item.data,
    password: generateHash(item.password),
    token: generateToken({ payload: item.data, token: TOKEN })
  };

  const fields = R.pipe(
    R.toPairs,
    R.flatten
  )(data);

  client.hmset(KEY, fields)
    .then(response => {
      resolve(data);
    })
    .catch(error => {
      console.log(error);
      return reject({ error });
    });
};


export default function authentiactionSeed () {
  return promise((resolve, reject) => {
    mapPromise(seedDB)(authentiactionsMock)
      .then(results => {
        resolve(results);
      })
      .catch(err => reject(err));
  });
}
