import isSchema from 'is-schema-valid';


export const authentiaction = {
  id       : 'string',
  password : 'string',
  roles    : ['string'],
  token    : 'string',
  username : 'string'
};


export default isSchema(authentiaction);
