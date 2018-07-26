require('dotenv').config();

module.exports = {
  app: {
    port: 3000,
  },
  database: {
    url: process.env.NODE_ENV === 'development' ? process.env.DB_DEV_URL : process.env.DB_URL,
    name: process.env.DB_NAME,
  },
};
