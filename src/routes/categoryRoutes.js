const express = require('express');
const categoryController = require('../controllers/categoryController');
const router = express.Router();
//TODO:Create swagger documentation for the routes
router.get('/selectbox', categoryController.getCategoriesForSelectBox);

router.post('/', categoryController.createCategory);
router.get('/', categoryController.getCategories);
router.get('/:id', categoryController.getCategoryById);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
