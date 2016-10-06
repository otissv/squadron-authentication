/*
* Password encryption helper method
*/

'use strict';

import bcrypt from 'bcrypt-nodejs';


export function generateHash (str) {
  return bcrypt.hashSync(str, bcrypt.genSaltSync(8), null);
};

export function compareHash (str, hash) {
  return bcrypt.compareSync(str, hash);
};
