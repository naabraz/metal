'use strict';

const mongo = require('mongodb').MongoClient;
const config = require('../../config');

const _startConnection = async () => await mongo.connect(config.database.url);
const _selectDatabase = async (connection) => connection.db(config.database.name);
const _getCollection = async (base, collection) => base.collection(collection);
const _closeConnection = async (connection) => connection.close();

module.exports = {
    base: async (connection) => await _selectDatabase(connection),
    collection: async (base, collection) => _getCollection(base, collection),
    startConnection: async () => await _startConnection(),
    closeConnection: async (connection) => await _closeConnection(connection)
}