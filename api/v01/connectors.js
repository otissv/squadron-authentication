import mocks from './mocks';


import Authentiaction from './authentiaction/authentiaction-connectors';


const { authentiactionMock } = mocks;


function connectors (mock) {
  return {
    authentiaction    : mock ? authentiactionMock    : Authentiaction
  };
};


export default connectors;
