const { model: TodoModel } = require('../../models/Todo');
const { model: UserModel } = require('../../models/User');

module.exports = {
  Query: {
    async getTodos() {
      return await TodoModel.find({});
    },
  },
  Mutation: {
    async createTodo(_, { todoInput }, context) {
      let todo = new TodoModel(todoInput);
      await UserModel.update(
        { _id: context.user._id },
        { $push: { todos: todo } }
      )
      return todo
    },
    async deleteTodo(_, { todoInput }, context) {
      await UserModel.update(
        { _id: context.user._id },
        { '$pull': { 'todos': { '_id': todoInput.id } } },
        { new: true }
      );
      return true;
    },
    async deleteTodos(_, __, context) {
      await UserModel.update(
        { _id: context.user._id },
        { '$pull': { 'todos': {} } },
        { new: true }
      );
      return true;
    },
    async updateTodo(_, { todoInput }, context) {
      await UserModel.update(
        { _id: context.user._id },
        { '$set': { 'todos': todoInput } },
        { new: true }
      );
      return true;
    }
  }
}