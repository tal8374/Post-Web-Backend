const todosResolvers = require('./todo');
const usersResolvers = require('./user');

module.exports = {
  Query: {
    ...todosResolvers.Query,
    ...usersResolvers.Query,
  },
  Mutation: {
    ...todosResolvers.Mutation,
    ...usersResolvers.Mutation,
  },
};
