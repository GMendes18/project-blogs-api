const { BlogPost, Category, User } = require('../models');

// const newPost = async ({ title, content, categoryIds, id }) => {
//   const date = new Date();

// //   const { data } = await BlogPost.create({
// //     title,
// //     content,
// //     userId: id,
// //     updated: date,
// //     published: date,
// //   });

// //   const blog
// // };

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: ['id', 'displayName', 'email', 'image'],
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });
  return posts;
};

const getPostById = async (postId) => {
  const post = await BlogPost.findByPk(postId, {
    include: [
      { model: User,
        as: 'user',
        attributes: ['id', 'displayName', 'email', 'image'],
      },
      {
        model: Category,
        as: 'categories',
        attributes: ['id', 'name'],
        through: { attributes: [] },
      },
    ],
  });
  if (!post) {
    return { status: 404, data: { message: 'Post does not exist' } };
  }
  
  return { status: 200, data: post };
};

module.exports = {
  getAllPosts,
  getPostById,
};