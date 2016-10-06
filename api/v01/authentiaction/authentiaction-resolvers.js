
export const authentiactionQueries = {
  authenticate (_, args, { connectors, databases }) {
    return connectors.authentiaction.authenticate({ args, databases });
  }
};


export const authentiactionMutations = {
  register (_, args, { connectors, databases }) {
    return connectors.authentiaction.register({ args, databases });
  },

  unauthenticate (_, args, { connectors, databases }) {
    return connectors.authentiaction.unauthenticate({ args, databases });
  }
};
