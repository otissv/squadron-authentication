import  authentiaction, { authentiactionQueries, authentiactionMutations } from './authentiaction/authentiaction-schemas';


const typeDefinitions = `
type Query {
  ${authentiactionQueries}
}
type Mutation {
  ${authentiactionMutations}
}

schema {
  query: Query
  mutation: Mutation
}
`;

export default [
  typeDefinitions,
  authentiaction,
];
