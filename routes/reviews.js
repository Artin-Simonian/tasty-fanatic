const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews.js");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.post("/recipes/:id/reviews", ensureLoggedIn, reviewsCtrl.create);
router.delete("/reviews/:id", ensureLoggedIn, reviewsCtrl.delete);
router.put("/reviews/:id", ensureLoggedIn, reviewsCtrl.update);

module.exports = router;
