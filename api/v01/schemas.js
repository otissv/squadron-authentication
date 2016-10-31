import authentiaction, {
  authentiactionQueries,
  authentiactionMutations
} from './authentiaction/authentiaction-schema';
import authorised, {
  authorisedQueries
} from './authorised/authorised-schema';

const typeDefinitions = `
type Query {
  ${authentiactionQueries}
  ${authorisedQueries}
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
  authorised
];
