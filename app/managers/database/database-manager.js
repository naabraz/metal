const mongo = require('mongodb').MongoClient;
const config = require('../../config');

const startConnection = async () => mongo.connect(config.database.url, { useNewUrlParser: true });
const getBase = async connection => connection.db(config.database.name);
const getCollection = async (base, collection) => base.collection(collection);
const closeConnection = async connection => connection.close();

module.exports = {
  getBase,
  getCollection,
  startConnection,
  closeConnection,
};
