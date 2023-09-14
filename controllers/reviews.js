const Recipe = require('../models/recipe')

module.exports = {
    create,
    // Add this export
    delete: deleteReview,
    editReview,
    update
  };

 

  async function update(req, res) {
    const recipe = await Recipe.findOne({'reviews._id': req.params.id}); 
    // const recipes = Recipe.reviews.id(req.params.id);  // Updated this line to the one below
    const review = recipe.reviews.id(req.params.id);
    // if (!recipes.user.equals(req.user._id)) return res.redirect(`/recipes/${recipe._id}`);  Updated below
    if (!review.user.equals(req.user._id)) return res.redirect(`/recipes/${recipe._id}`);  // Updated below
    // recipes.reviews = req.body.review;  // Updated below
    review.content = req.body.content // input should have name="content" instead but using review
    try {
      await recipe.save();
    } catch (e) {
      console.log(e.message);
    }
    res.redirect(`/recipes/${recipe._id}`);
  }
  
  async function editReview(req, res) {
    const recipe = await Recipe.findOne({'reviews._id': req.params.id});
    const review = recipe.reviews.id(req.params.id);
    res.render('comments/edit', { review });
  }

  async function deleteReview(req, res) {
    const recipe = await Recipe.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
    if (!recipe) return res.redirect('/recipes');

    recipe.reviews.remove(req.params.id);
    // Save the updated movie doc
    await recipe.save();
    // Redirect back to the movie's show view
    res.redirect(`/recipes/${recipe._id}`);
  }

  async function create(req, res) {
    const recipe = await Recipe.findById(req.params.id);
  
    // Add the user-centric info to req.body (the new review)
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
  
    // We can push (or unshift) subdocs into Mongoose arrays
    recipe.reviews.push(req.body);
    try {
      // Save any changes made to the movie doc
      await recipe.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/recipes/${recipe._id}`);
  }