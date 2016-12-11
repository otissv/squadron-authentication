import { authentiactionQueries, authentiactionMutations } from './authentiaction/resolver-authentiaction';
import { authorisedQueries } from './authorised/resolver-authorised';

export default {
  Query: {
    ...authentiactionQueries,
    ...authorisedQueries
  },

  Mutation: {
    ...authentiactionMutations
  }
};
