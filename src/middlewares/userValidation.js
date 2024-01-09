const { User } = require('../models');

const validateUser = async (req, res, next) => {
  const { displayName, email } = req.body;
  
  if (!displayName || displayName.length < 8) {
    return res.status(400).json(
      { message: '"displayName" length must be at least 8 characters long' },
    );
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};

const validatePassword = async (req, res, next) => { 
  const { password, email } = req.body;
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    return res.status(409).json({ message: 'User already registered' });
  }
  if (!password || password.length < 6) {
    return res.status(400).json(
      { message: '"password" length must be at least 6 characters long' },
    );
  }
  next();
};
  
module.exports = {
  validateUser,
  validatePassword,
};
