const { model, Schema } = require('mongoose');
const {schema: labelSchema} = require('./Label');

const todoSchema = new Schema({
  title: String,
  notes: [{text: String, isCompleted: Boolean}],
  labels: [labelSchema],
  color: String,
  isCheckboxMode: Boolean
});

module.exports = {
  model: model('Todo', todoSchema),
  schema: todoSchema
}
