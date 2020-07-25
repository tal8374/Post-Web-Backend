const { model: TodoModel } = require('../../models/Todo');

module.exports = {
  Query: {
    async getTodos() {
      return await TodoModel.find({});
    },
  },
  Mutation: {
    async createTodo(_, { todoInput }) {
      let todo = new TodoModel(todoInput);
      await todo.save();
      return todo
    },
    async deleteTodo(_, { todoInput }) {
      return await TodoModel.findOneAndDelete({ _id: todoInput.id });
    },
    async deleteTodos() {
      await TodoModel.remove();
      return true;
    },
    async updateTodo(_, { todoInput }) {
      return await TodoModel.findOneAndUpdate(
        { _id: todoInput.id },
        { $set: todoInput },
        {new: true}
        );
    }
  }
}