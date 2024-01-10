const routes = require('express').Router();
const tokenValidation = require('../middlewares/tokenValidation');
const { postController } = require('../controllers');

// routes.post('/', tokenValidation, postController.createBlogPost);
routes.get('/', tokenValidation, postController.getAllPosts);
routes.get('/:id', tokenValidation, postController.getPostById);

module.exports = routes;