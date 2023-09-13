const Recipe = require("../models/recipe");

module.exports = {
  index,
  show,
  new: newRecipe,
  create,
};

async function index(req, res) {
  const recipes = await Recipe.find({});
  res.render("recipes/index", {recipes});
}

async function show(req, res) {
  const recipe = await Recipe.findById(req.params.id);
  res.render("recipes/show", { recipe});
}

async function newRecipe(req, res) {
  res.render("recipes/new");
}

async function create(req, res) {
  req.body.user = req.user._id;
  //req.body.image = req.image._id;
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
  try {
    const recipe = await Recipe.create(req.body);

    res.redirect("/recipes");
  } catch (err) {
    console.log(err);
    res.render("new", { errorMsg: err.message });
  }
  
}

