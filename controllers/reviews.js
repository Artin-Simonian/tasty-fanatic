const Recipe = require('../models/recipe')

module.exports = {
    create,
    // Add this export
    delete: deleteReview,
    editReview
  };

  async function editReview(req, res) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    const recipe = await Recipe.findOne({'reviews._id': req.params.id});
    // Find the comment subdoc using the id method on Mongoose arrays
    // https://mongoosejs.com/docs/subdocs.html
    const review = recipe.reviews.id(req.params.id);
    // Render the comments/edit.ejs template, passing to it the comment
    res.render('comments/edit', { review });
  }

  async function deleteReview(req, res) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    const recipe = await Recipe.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
    // Rogue user!
    if (!recipe) return res.redirect('/recipes');
    // Remove the review using the remove method available on Mongoose arrays
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