const routes = require('express').Router();
const { userController } = require('../controllers');
// const tokenValidation = require('../middlewares/tokenValidation');
const userValidation = require('../middlewares/userValidation');

routes.post(
  '/', 
  userValidation.validatePassword,
  userValidation.validateUser, 
  userController.createUser,
);

module.exports = routes;