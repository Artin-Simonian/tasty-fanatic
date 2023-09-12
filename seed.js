require("dotenv").config();
require("./config/database");
const Recipe = require("./models/recipe");



const dataRecipe = [
    {
        name: 'Ghorme',
        description: 'pour it',
        ingredients: 'water',
        image: 'hello'
    }
]



(async function createRecipe() {
  await Recipe.deleteMany({});
  const recipes = await Recipe.create(dataRecipe);
  console.log(recipes);
  process.exit();
})();
