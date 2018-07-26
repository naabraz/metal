require('dotenv').config();

module.exports = {
  app: {
    port: 3000,
  },
  database: {
    url: process.env.DB_URL,
    name: process.env.DB_NAME,
  },
};
