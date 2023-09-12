const epxress = require('express');
const router = epxress.Router();
const recipeCtrl = require('../controllers/recipe')
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/', recipeCtrl.home);
router.get('/new', recipeCtrl.new);
// GET /movies/:id (show functionality) MUST be below new route
router.get('/:id', recipeCtrl.show);
router.post('/', recipeCtrl.create);
router.post('/', ensureLoggedIn, recipeCtrl.create);


module.exports = router;