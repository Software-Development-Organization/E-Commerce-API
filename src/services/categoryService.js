const Category = require('../models/categoryModel');

const createCategory = async (data) => {
  const category = new Category(data);
  return await category.save();
};

const getCategories = async () => {
  return await Category.find({ isDeleted: false });
};

const getCategoryById = async (id) => {
  return await Category.findById(id);
};

const updateCategory = async (id, data) => {
  return await Category.findByIdAndUpdate(id, data, { new: true });
};

const deleteCategory = async (id) => {
  const category = await Category.findById(id);

  if (!category) {
    throw new Error('Category not found');
  }

  return await category.softDelete();
};

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
