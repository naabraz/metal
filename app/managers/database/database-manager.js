const mongo = require('mongodb').MongoClient;
const { url, name } = require('../../config').database;

const startConnection = async () => mongo.connect(url, { useNewUrlParser: true });
const getBase = async connection => connection.db(name);
const getCollection = async (base, collection) => base.collection(collection);
const closeConnection = async connection => connection.close();

module.exports = {
  getBase,
  getCollection,
  startConnection,
  closeConnection,
};
