const todosResolvers = require('./todo');

module.exports = {
  Query: {
    ...todosResolvers.Query
  },
  Mutation: {
    ...todosResolvers.Mutation
  },
};
