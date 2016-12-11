import mocks from './mocks-auth';


import Authentiaction from './authentiaction/connector-authentiaction';
import Authorised from './authorised/connector-authorised';

const {
  authentiactionMock,
  authorisedMock
} = mocks;


function connectors (mock) {
  /* eslint-disable no-multi-spaces */
  return {
    authentiaction : mock ? authentiactionMock : Authentiaction,
    authorised     : mock ? authorisedMock     : Authorised
  };
  /* eslint-enable no-multi-spaces */
};


export default connectors;
