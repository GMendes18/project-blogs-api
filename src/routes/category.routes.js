const routes = require('express').Router();
const { categoryController } = require('../controllers');
const tokenValidation = require('../middlewares/tokenValidation');

routes.post('/', tokenValidation, categoryController.createCategory);
routes.get('/', tokenValidation, categoryController.getAllCategories);

module.exports = routes;
