const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
  try {
    const category = await categoryService.createCategory(req.body);

    res.status(201).json({
      message: 'Category created successfully',
      success: true,
      data: category,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await categoryService.getCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await categoryService.getCategoryById(req.params.id);

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const category = await categoryService.updateCategory(
      req.params.id,
      req.body
    );

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.status(200).json({
      message: 'Category updated successfully',
      success: true,
      data: category,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { isHardDelete } = req.query;

    let category;

    if (isHardDelete === 'true') {
      category = await categoryService.hardDeleteCategory(id);
    } else {
      category = await categoryService.softDeleteCategory(id);
    }

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.status(200).json({
      message: 'Category deleted successfully',
      success: true,
      data: category,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCategoriesForSelectBox = async (req, res) => {
  try {
    const categories = await categoryService.getCategoriesForSelectBox();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
  getCategoriesForSelectBox,
};
