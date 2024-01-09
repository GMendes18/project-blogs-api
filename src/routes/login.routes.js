const routes = require('express').Router();
const { loginController } = require('../controllers');
const loginValidation = require('../middlewares/loginValidation');

routes.post('/', loginValidation, loginController.login);

module.exports = routes;