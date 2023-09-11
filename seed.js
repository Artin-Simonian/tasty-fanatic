require("dotenv").config();
require("./config/database");
const Category = require("./models/category");
const Recipe = require("./models/recipe");

const data = [
  {
    name: "American",
    image: "american",
  },
  {
    name: "Tai",
    image: "Tai",
  },
];

const dataRecipe = [
    {
        name: 'Ghorme',
        description: 'pour it',
        ingredients: 'water',
        image: 'hello'
    }
]

(async function createCategories() {
  await Category.deleteMany({});
  const categories = await Category.create(data);
  console.log(categories);
  process.exit();
})();

//await createCategories();

(async function createRecipe() {
  await Recipe.deleteMany({});
  const recipes = await Recipe.create(dataRecipe);
  console.log(recipes);
  process.exit();
})();
