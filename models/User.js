const { model, Schema } = require('mongoose');
const { schema: TodoSchema } = require('./Todo');

const userSchema = new Schema({
  email: String,
  password: String,
  todos: [TodoSchema],
});

module.exports = {
  model: model('User', userSchema),
  schema: userSchema
}
