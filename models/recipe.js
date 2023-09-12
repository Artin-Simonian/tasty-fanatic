const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingredients: {
    type: Array,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Recipe', recipeSchema);