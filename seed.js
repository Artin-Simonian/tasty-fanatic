require('dotenv').config();
require('./config/database');
const Category = require('./models/category')

const data = [
    {
        name: 'American',
        image: 'american'
    },
    {
        name: 'Tai',
        image: 'Tai'
    }
];

(async function createCategories() {

    await Category.deleteMany({});
    const categories = await Category.create(data);
    console.log(categories);
    process.exit();
})();

//await createCategories();

