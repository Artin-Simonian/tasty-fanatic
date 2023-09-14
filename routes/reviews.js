const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews.js');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /recipes/:id/recipes (create review for a movie)
router.post('/recipes/:id/reviews', ensureLoggedIn, reviewsCtrl.create);
// DELETE /reviews
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);


router.put('/reviews/:id', ensureLoggedIn, reviewsCtrl.update);

module.exports = router;