const routes = require('express').Router();
const { categoryController } = require('../controllers');
const tokenValidation = require('../middlewares/tokenValidation');

routes.post('/', tokenValidation, categoryController.createCategory);

module.exports = routes;
