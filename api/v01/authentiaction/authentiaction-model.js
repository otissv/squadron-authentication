import isSchema from 'is-schema-valid';


export const authentiactionModel = {
  _id      : 'string',
  password : 'string',
  roles    : ['string'],
  token    : 'string',
  username : 'string'
};


export const authentiactionValidation = isSchema(authentiactionModel);
