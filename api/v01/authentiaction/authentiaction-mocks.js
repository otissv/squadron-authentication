export const authentiactionsMock = [
  {
    id            : '051e4c84-af48-4372-82b9-432879d115a3',
    created        : 'Wed May 11 2016 01:29:39 GMT+0200 (CEST)',
    email          : 'myname@email.com',
    firstName      : 'ania',
    lastName       : 'virginie',
    password       : 'a',
    roles          : ['admin', 'user'].toString(),
    telephoneNumber: '+48 513 684 829',
    token          : 'this_is_my_token',
    username       : 'a'
  },
  {
    id            : '69a40aa2-71e7-49b0-906a-da394f4fb469',
    created        : 'Wed May 11 2016 01:29:39 GMT+0200 (CEST)',
    email          : 'myname@email.com',
    firstName      : 'ania',
    lastName       : 'virginie',
    password       : 'a',
    roles          : ['admin'].toString(),
    telephoneNumber: '+48 513 684 829',
    token          : 'this_is_my_token',
    username       : 'a'
  }
];

export default class AuthentiactionMock {
  authenticate (query) {

  }

  register (query) {

  }

  unauthenticate (data) {
  }
}
