const jwt = require('jsonwebtoken');

const authenticateToken = async (req, res, next) => {
  const bearerToken = req.header('Authorization');
  
  if (!bearerToken) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const token = bearerToken.split(' ')[1];
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authenticateToken;
