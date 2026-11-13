const express = require('express');
const { getAllCategories, storCategoryByName } = require('../controllers/categoryControllers');
const router = express.Router();

// router
// router.get('/', (req, res) => {
//     res.json ({ message: 'Welcome to the categories route!',
//      data: [
//         { id: 1, name: 'Electronics' },
//         { id: 2, name: 'Clothing' },
//         { id: 3, name: 'Books' }
//     ]});
// });

router.get("/", getAllCategories);
// router.post('/', (req, res) => {
//     res.send('POST request to the categories route');
// });
router.post("/", storCategoryByName);
router.get('/:name', (req, res) => {
    res.send(`GET request to the categories route with name: ${req.params.name}`);
});
//exports function router
module.exports = router;