import authentiaction, {
  authentiactionQueries,
  authentiactionMutations
} from './authentiaction/schema-authentiaction';
import authorised, {
  authorisedQueries
} from './authorised/schema-authorised';

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
