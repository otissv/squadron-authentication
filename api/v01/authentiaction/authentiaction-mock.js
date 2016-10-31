export const authentiactionsMock = [
  {
    client           : 'squadron.local.server',
    data             : {
      id             : '051e4c84-af48-4372-82b9-432879d115a3',
      created        : 'Wed May 11 2016 01:29:39 GMT+0200 (CEST)',
      email          : 'ania@email.com',
      firstName      : 'ania',
      lastName       : 'zeyler',
      password       : 'ania',
      roles          : ['admin'].toString(),
      telephoneNumber: '+48 513 684 829',
      token          : 'this_is_my_token',
      username       : 'ania'
    }
  },
  {
    client           : 'squadron.local.server',
    data             : {
      id             : 'c362f0ad-2114-40bc-aa71-a22f855db085',
      created        : 'Wed May 11 2016 01:29:39 GMT+0200 (CEST)',
      email          : 'otis@email.com',
      firstName      : 'otis',
      lastName       : 'virginie',
      password       : 'otis',
      roles          : ['admin', 'user'].toString(),
      telephoneNumber: '+48 513 684 829',
      token          : 'this_is_my_token',
      username       : 'otis'
    }
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
