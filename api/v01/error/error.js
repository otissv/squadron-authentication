'use strict';

export default {
  ACCESS_DENIED: {
    message: {
      type: 'ACCESS_DENIED',
      error: 'Access Denied/Forbidden'
    }
  },

  INCORRECT_CREDENTIALS: {
    message: {
      type: 'INCORRECT_CREDENTIALS',
      message: 'Username or password is incorrect.'
    }
  },
  
  NO_USER_FOUND: {
    message: {
      type: 'NO_USER_FOUND',
      message: 'No user found.'
    }
  },

  INTERNAL_SERVER: {
    message: {
      type: 'INTERNAL_SERVER',
      error: 'Internal server error.'
    }
  },

  INVALID_DATA: {
    message: {
      type: 'INVALID_DATA',
      error: 'Invalid data'
    }
  }
};
