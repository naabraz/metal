'use strict';

const utils = require('../database/utils');

const database = {
    base: async (connection) => await utils.selectDatabase(connection),
    collection: async (base) => await utils.getCollection(base, 'bands')
}

module.exports = {
    list: async () => {
        const connection = await utils.startConnection();
        const base = await database.base(connection);
        const collection = await database.collection(base);

        const result = await collection.find().toArray();

        utils.closeConnection(connection);

        return result;
    },

    insert: async (document) => {
        const connection = await utils.startConnection();
        const base = await utils.selectDatabase(connection);
        const collection = await utils.getCollection(base, 'bands');

        try {
            collection.insertOne(document);
        } catch (error) {
            console.log(error);
        }
    }
}