const { model, Schema } = require('mongoose');

const labelSchema = new Schema({
  title: String,
});

module.exports = {
  model: model('Label', labelSchema),
  schema: labelSchema,
};
