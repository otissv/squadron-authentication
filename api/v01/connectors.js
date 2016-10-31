import mocks from './mocks';


import Authentiaction from './authentiaction/authentiaction-connector';;
import Authorised from './authorised/authorised-connector';;

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
