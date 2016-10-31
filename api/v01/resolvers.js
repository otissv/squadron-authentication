import { authentiactionQueries, authentiactionMutations } from './authentiaction/authentiaction-resolver';
import { authorisedQueries } from './authorised/authorised-resolver';

export default {
  Query: {
    ...authentiactionQueries,
    ...authorisedQueries
  },

  Mutation: {
    ...authentiactionMutations
  }
};
