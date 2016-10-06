/*
* Tokens Controller
*/

'use strict';

import jwt from 'jsonwebtoken';
import secret from '../secret';
import { instance } from '../server/databases/redis';

const redis = instance;
const TOKEN = 'token';
const COLLECTION = 'users';

export function userTokenKey (_id) {
  return `${COLLECTION}:${_id.toString()}`;
}


export function generateToken (fn) {
  return function (user) {
    // Generate json web token
    const token = jwt.sign(user, secret.token);


    // Save to token
    if (user._id && fn) {
      fn({
        _id: userTokenKey(user._id),
        key: TOKEN,
        value: token
      })
      // redis().hset(userTokenKey(user._id), TOKEN, token);
    }
    return token;
  }
};


export function	getToken (_id, cb) {

  // Get token
  if (!_id) {
    cb && cb();
  } else {
    redis().hget(userTokenKey(_id), TOKEN, (err, token) => {
      if (err) {
        cb && cb(err);
      } else {
        cb && cb(token);
      }
    });
  }
};


export function validateToken (_id, token, cb) {

  function x (hasToken) {
    if (hasToken) {
      // if token is valid call callback with token
      cb && cb(token);
    } else {
      // if token is valid call callback with undefined
      cb && cb();
    }
  }

  getToken(_id, x);
};


export function deleteToken (_id, cb) {
  if (!_id) {
    cb && cb(true);
  } else {
    console.log();
    redis().del('tokens', `${COLLECTION}:${_id.toString()}`, (err, reply) => {
      if (err) {
        cb && cb(err);
      }

      cb && cb(null, reply);
    });
  }
}
