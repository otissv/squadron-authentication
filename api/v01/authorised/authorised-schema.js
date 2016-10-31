
export default `
type Authorised {
  id   : String,
  token: String,
  roles: [String]
  _result_: Boolean
}
`;



export const authorisedQueries = `
  authorised(
    id   : String,
    token: String,
    _result_: Boolean
  ) :Authorised
`;
