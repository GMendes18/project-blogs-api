const jwt = require('jsonwebtoken');
const { User } = require('../models');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await User.create({ displayName, email, password, image });
    const payload = {
      id: newUser.id,
      displayName: newUser.displayName,
      email: newUser.email,
      image: newUser.image,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });
    return res.status(201).json({ token });
  } catch (error) {
    console.error('Error in createUser:', error);
  }
};

const getAll = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { createUser, getAll };
