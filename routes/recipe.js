const epxress = require("express");
const router = epxress.Router();
const recipeCtrl = require("../controllers/recipe");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/", recipeCtrl.index);
router.get("/new", ensureLoggedIn, recipeCtrl.new);
router.get("/:id", recipeCtrl.show);
router.post("/", ensureLoggedIn, recipeCtrl.create);

module.exports = router;
