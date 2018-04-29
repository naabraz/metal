const mongo = require('mongodb').MongoClient;
const config = require('../../config');

const startConnection = async () => mongo.connect(config.database.url);

const selectDatabase = async connection => connection.db(config.database.name);

const getCollection = async (base, collection) => base.collection(collection);

const closeConnection = async connection => connection.close();

module.exports = {
  base: async connection => selectDatabase(connection),
  collection: async (base, collection) => getCollection(base, collection),
  startConnection: async () => startConnection(),
  closeConnection: async connection => closeConnection(connection),
};
