const jwt = require('jsonwebtoken');
const { User } = require('../models');

const newToken = (id) => {
  const token = jwt.sign({
    sub: id,
    role: 'user',
  }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
  
  return token;
};
const login = async (req, res) => {
  const { email, password } = req.body;  
  const user = await User.findOne({ where: { email, password } });
      
  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
      
  const token = newToken(user.id);
      
  return res.status(200).json({ token });
};

module.exports = {
  login,
};
