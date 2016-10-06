'use strict';
import R from 'ramda';
import mapPromise from 'map-async-promise';
import databases from './../../../server/databases';
import development from '../../../server/env/development-env';
import { authentiactionsMock } from './authentiaction-mocks';
import { generateHash } from '../../../utils/utils-bycrypt';
import { generateToken } from '../../../utils/utils-token';
import promise from '../../../utils/utils-promise';


const redis = databases.redis.connect(development.redis);


const setHash = (resolve, reject, item, index, arr) => {
  const KEY = `authentiaction:${item.id}`;
  const data = {
    ...item,
    password: generateHash(item.password),
    token: generateHash(generateToken()(item))
  };

  const fields = R.pipe(
    R.toPairs,
    R.flatten
  )(data);

  redis.hmset(KEY, fields)
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
    mapPromise(setHash)(authentiactionsMock)
      .then(results => {
        resolve(results);
      })
      .catch(err => reject(err));
  });

}

// seedAuthentiaction()
//   .then(response => {
//     console.log('Authentiaction mocks has been seeded in redis');
//   })
//   .catch(err => console.log(err));


// redis.hgetall('authentiaction:563fa9dd007093486f3052a5')
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error);
//   });
