const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  email: String,
  password: String,
});

module.exports = {
  model: model('User', userSchema),
  schema: userSchema
}
