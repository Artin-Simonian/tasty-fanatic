const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
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
  userAvatar: String,
  reviews: [reviewSchema]
}
,{
  timestamps: true
});

module.exports = mongoose.model("Recipe", recipeSchema);
