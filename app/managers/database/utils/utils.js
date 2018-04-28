'use strict';

const mongo = require('mongodb').MongoClient;
const config = require('../../../config');

module.exports = {
    startConnection: async () => await mongo.connect(config.database.url),
    selectDatabase: async (connection) => connection.db(config.database.name),
    getCollection: async (base, collection) => base.collection(collection),
    closeConnection: async (connection) => connection.close()
}