const { postServices } = require('../services');
// const { BlogPost, PostCategory, Category } = require('../models');

// const createBlogPost = async (req, res) => {
//   const { title, content, categoryIds } = req.body;
//   if (!title || !content || !categoryIds) {
//     return res.status(400).json({ message: 'Some required fields are missing' });
//   }
//   const { categories } = await Category.findAll({ where: { id: categoryIds } });
//   if (categories.length < categoryIds.length) {
//     return res.status(400).json({ message: 'One or more "categoryIds" not found' });
//   }

//   const userId = req.user.sub;
//   const blogPost = await BlogPost.create({
//     title,
//     content,
//     userId,
//   });
//   await blogPost.addCategories(categories);
//   return res.status(201).json(blogPost);
// };

const getAllPosts = async (_req, res) => {
  const posts = await postServices.getAllPosts();
  return res.status(200).json(posts);
};

module.exports = {
  // createBlogPost,
  getAllPosts,
};
