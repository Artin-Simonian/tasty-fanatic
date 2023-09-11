const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
  category: {
    type: String,
    required: "Required",
  },
  image: {
    type: String,
    required: "Required",
  },
});

module.exports = mongoose.model('categories', categoriesSchema);
