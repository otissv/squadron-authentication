
export const authentiactionQueries = {
  authenticate (_, args, context) {
    return context.connectors.authentiaction.authenticate({ args, ...context });
  }
};


export const authentiactionMutations = {
  register (_, args, context) {
    return context.connectors.authentiaction.register({ args, ...context });
  },

  unauthenticate (_, args, context) {
    return context.connectors.authentiaction.unauthenticate({ args, ...context });
  }
};
