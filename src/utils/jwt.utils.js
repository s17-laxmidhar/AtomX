const jwt = require('jsonwebtoken');
const {JWT_SECRET : SECRET} = require('../config/dotenv');;

exports.generateToken = (userId) => {
  return jwt.sign({ userId }, SECRET, { expiresIn: '1h' });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, SECRET);
};