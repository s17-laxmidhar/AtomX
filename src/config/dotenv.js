require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  DB_URI: process.env.DB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
};
