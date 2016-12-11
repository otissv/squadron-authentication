export const authentiactionsMock = [
  {
    client : 'loop.local.server',
    data   : {
      id             : 'user-0',
      firstName      : 'otis',
      username       : 'otis',
      lastName       : 'otisV',
      created        : 'Wed May 11 2016 01:29:39 GMT+0200 (CEST)',
      email          : 'ania@email.com',
      password       : '0',
      roles          : ['admin'].toString(),
      telephoneNumber: '+48 513 684 829',
      token          : 'this_is_my_token'
    }
  },
  {
    client : 'loop.local.server',
    data   : {
      id             : 'user-1',
      firstName      : 'marta',
      username       : 'marta',
      lastName       : 'martaK',
      created        : 'Wed May 11 2016 01:29:39 GMT+0200 (CEST)',
      email          : 'otis@email.com',
      password       : 'otis',
      roles          : ['admin', 'user'].toString(),
      telephoneNumber: '+48 513 684 829',
      token          : 'this_is_my_token'
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
