import {
  promise,
  compareHash,
  cleanObject,
  generateHash,
  generateToken,
  verifyToken
} from '../../../../squadron-utils';
import ERROR from '../error/error';
import redis from '../../../server/databases/redis';
import { TOKEN } from '../../../secret';
import { env } from '../../../server/env/environment.js';

function cleanResponse (response) {
  return cleanObject({
    ...response,
    token: generateHash(response.token),
    password: null,
    roles: response.roles ? response.roles.split() : []
  })
}

export default class Authentiaction {
  constructor () {
    this.redis = redis.connect(env().redis);
  }

  authenticate ({ args, req }) {
    const { password, id } = args;
    const KEY = `authentiaction:${req.body.client.host}:${args.id}`;

    return promise((resolve, reject) => {
      this.redis.hgetall(KEY)
        .then(response => {
          if (!response) {
            return reject(ERROR.NO_USER_FOUND);
          };

          if (compareHash({ data: password, hash: response.password })) {
            resolve(cleanResponse(response));
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


  register ({ args, req }) {
    const { id, password } = args;
    const KEY = `authentiaction:${req.body.client.host}:${id}`;

    const data = {
      ...args,
      password: generateHash(password),
      roles: args.roles ? args.roles.toString() : 'user',
      token: generateToken({ payload: args, token: TOKEN })
    };

    return promise((resolve, reject) => {
      this.redis.hmset(KEY, data)
        .then(response => {
          resolve(cleanResponse(data));
        })
        .catch(error => {
          console.log(error);
          reject({ error });
        });
    });
  }


  unauthenticate ({ args, req }) {
    const { id } = args;
    const KEY = `authentiaction:${req.body.client.host}:${id}`;

    return promise((resolve, reject) => {
      this.redis.del(KEY)
        .then(response => {
          console.log(args);
          response ? resolve({ ...args, _result_: 'success' }) : resolve({ ...args, _result_: 'failed' });
        })
        .catch(error => {
          console.log(error);
          reject({ error });
        });
    });
  }

  authorised ({ args, req }) {

  }
}
