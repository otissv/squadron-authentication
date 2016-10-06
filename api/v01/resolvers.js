import { authentiactionQueries, authentiactionMutations } from './authentiaction/authentiaction-resolvers';


export default {
  Query: {
    ...authentiactionQueries
  },
  
  Mutation: {
    ...authentiactionMutations
  }
};
