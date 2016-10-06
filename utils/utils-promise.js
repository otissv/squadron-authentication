'use strcit';

import Promise from 'bluebird';

export default function promise (fn) {
  return new Promise((resolve, reject) => fn(resolve, reject));
};
