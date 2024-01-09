const { User } = require('../models');

const findLogin = async (email) => {
  const user = await User.findOne({ where: { email } });
  
  return user;
};

module.exports = {
  findLogin,
};