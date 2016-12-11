import isSchema from 'is-schema-valid';


export const authorised = {
  id    : { type: 'string', required: true },
  token : { type: 'string', required: true }
};


export default isSchema(authorised);
