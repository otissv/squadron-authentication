import {
  generateToken,
  userTokenKey
} from '../../../utils/utils-token';
import { compareHash } from '../../../utils/utils-bycrypt.js';
import { authentiactionValidation } from './authentiaction-model';
import promise from '../../../utils/utils-promise';
import { cleanObjAll } from 'ufunc';
import ERROR from '../errors/errors';

export default class Authentiaction {

  authenticate ({ args, databases }) {
    const { redis } = databases;
    const { password, id } = args;
    const KEY = `authentiaction:${id}`;

    return promise((resolve, reject) => {
      redis.hgetall(KEY)
        .then(response => {
          console.log(response);
          if (!response) {
            return reject(ERROR.NO_USER_FOUND);
          };

          const result = cleanObjAll({
            ...response,
            password: null,
            roles: response.roles.split()
          });

          if (compareHash(password, response.password)) {
            resolve(result);

          } else {
            reject(ERROR.INCORRECT_CREDENTIALS);
          }
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }

  find ({ args, databases }) {
    // const { redis }  = databases;
  }


  register ({ args, databases }) {
    const { redis } = databases;
    const KEY = `authentiaction:${args}`;

    return promise((resolve, reject) => {
      redis.hmset(KEY, args)
        .then(response => {
          resolve(args);
        })
        .catch(error => {
          console.log(error);
          reject({ error });
        });
    });
  }

  unauthenticate ({ args, databases }) {
    const { redis } = databases;
    const KEY = `authentiaction:${args.id}`;

    return promise((resolve, reject) => {
      redis.del(KEY)
        .then(response => {
          console.dir(response);
          resolve(args);
        })
        .catch(error => {
          console.log(error);
          reject({ error });
        });
    });
  }
}
