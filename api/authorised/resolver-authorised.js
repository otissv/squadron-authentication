
export const authorisedQueries = {
  authorised (_, args, context) {
    return context.connectors.authorised.veriftToken({ args, ...context });
  }
};
