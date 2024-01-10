const { Category } = require('../models');
const { categoriesServices } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  const category = await Category.create({ name });

  return res.status(201).json(category);
};

const getAllCategories = async (req, res) => {
  const { status, data } = await categoriesServices.getAllCategories();
  return res.status(status).json(data);
};

module.exports = {
  createCategory,
  getAllCategories,
};
