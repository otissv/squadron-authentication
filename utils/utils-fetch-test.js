/*
* AJAX helper method
 */

'use strict';

import axios from 'axios';


export default function fetch (args) {
  const { assert, method, url, data } = args;

  let options;

  if (method === 'post' || method === 'put') {
    options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
  }


  axios({ method, url, data, options })
    .then(function (response) {
      assert(response.data);
    })
    .catch(function (response) {
      assert(response);
    });
}
