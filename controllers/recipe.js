
const Category = require("../models/category");
const Recipe = require('../models/recipe')



exports.home = async(req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
      res.render('index', { title: 'Cooking Blog - Home', categories } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
}

exports.submit = async(req, res) => {
  res.render('submit', { title: 'Submit Recipe'} );
}

exports.submitPost = async(req, res) => {

  res.redirect('/submit');
}