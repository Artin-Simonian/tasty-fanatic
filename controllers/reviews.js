const Recipe = require("../models/recipe");

module.exports = {
  create,
  delete: deleteReview,
  editReview,
  update,
};

async function update(req, res) {
  const recipe = await Recipe.findOne({ "reviews._id": req.params.id });

  const review = recipe.reviews.id(req.params.id);

  if (!review.user.equals(req.user._id))
    return res.redirect(`/recipes/${recipe._id}`);

  review.content = req.body.content;
  try {
    await recipe.save();
  } catch (e) {
    console.log(e.message);
  }
  res.redirect(`/recipes/${recipe._id}`);
}

async function editReview(req, res) {
  const recipe = await Recipe.findOne({ "reviews._id": req.params.id });
  const review = recipe.reviews.id(req.params.id);
  res.render("comments/edit", { review });
}

async function deleteReview(req, res) {
  const recipe = await Recipe.findOne({
    "reviews._id": req.params.id,
    "reviews.user": req.user._id,
  });
  if (!recipe) return res.redirect("/recipes");

  recipe.reviews.remove(req.params.id);
  await recipe.save();
  res.redirect(`/recipes/${recipe._id}`);
}

async function create(req, res) {
  const recipe = await Recipe.findById(req.params.id);

  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

  recipe.reviews.push(req.body);
  try {
    await recipe.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/recipes/${recipe._id}`);
}
