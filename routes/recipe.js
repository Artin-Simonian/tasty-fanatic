const epxress = require('express');
const router = epxress.Router();
const recipeCtrl = require('../controllers/recipe')


router.get('/', recipeCtrl.home);
router.get('/submit', recipeCtrl.submit)



module.exports = router;