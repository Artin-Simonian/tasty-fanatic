const epxress = require('express');
const router = epxress.Router();
const recipeCtrl = require('../controllers/recipe')


router.get('/', recipeCtrl.home);
router.get('/submit', recipeCtrl.submit);
router.get('/developer', recipeCtrl.developer);
router.post('/submit', recipeCtrl.submitPost);



module.exports = router;