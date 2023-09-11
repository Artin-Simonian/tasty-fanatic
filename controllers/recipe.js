require("../config/database");
const category = require("../models/categories");

exports.home = async (req, res) => {
  try {
    const categoryNumber = 5;
    const categories = await category.find({}).limit(categoryNumber);

    res.render("index", { categories });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error 500" });
  }
};
