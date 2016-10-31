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
    password: null,
    roles: response.roles ? response.roles.split() : []
  })
}

export default class Authentiaction {
  constructor () {
    this.redis = redis.connect(env().redis);
  }

  veriftToken ({ args, req, validation }) {
    const { id, token } = args;
    const dataIsValid = validation.authorised({ id, token }).valid;
    const client = typeof req.body.client === 'string' ? JSON.parse(req.body.client).host : req.body.client.host;
    const KEY = `authentiaction:${client}:${args.id}`;

    return promise((resolve, reject) => {
      if (!dataIsValid) {
        console.error(ERROR.INVALID_DATA);
        reject(false);

      } else {
        this.redis.hgetall(KEY)
          .then(response => {
            if (!response) {
              console.error(ERROR.INVALID_DATA);
              reject({
                _result_: false
              });
            }

            try {
              if (compareHash({ data: response.token, hash: token })) {
                resolve({
                  id: response.id,
                  roles: response.roles.split(),
                  _result_: true
                });
              };
              
            } catch (e) {
              reject({
                _result_: false
              });
            }

          })
          .catch(error => {
            console.error(error);
            reject(ERROR.INTERNAL_SERVER);
          })
      }
    })
  }
}
