
export default `
type Authentiaction {
  id             : String,
  email          : String,
  firstName      : String
  lastName       : String,
  password       : String,
  roles          : [String],
  telephoneNumber: String,
  token          : String,
  username       : String,
  _result_       : String
}
`;



export const authentiactionQueries = `
  authenticate(
    id      : String,
    password: String
  ): Authentiaction
`;

export const authentiactionMutations = `
  register(
    id             : String,
    email          : String,
    firstName      : String
    lastName       : String,
    password       : String,
    roles          : [String],
    telephoneNumber: String,
    username       : String
  ): Authentiaction
  unauthenticate(
    id: String
  ): Authentiaction
`;
