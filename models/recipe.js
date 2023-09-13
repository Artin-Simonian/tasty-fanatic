const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  ingredients: {
    type: String,
  },
  image: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

module.exports = mongoose.model("Recipe", recipeSchema);
