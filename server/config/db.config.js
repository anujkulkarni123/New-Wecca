require('dotenv').config();

module.exports = {
  url: process.env.MONGO_URL + process.env.MONGO_DB
};
