const database = require('../../../managers/database');

module.exports = {
  listBands: async () => {
    const connection = await database.startConnection();
    const base = await database.base(connection);
    const collection = await database.collection(base, 'bands');

    const result = await collection.find().toArray();

    database.closeConnection(connection);

    return result;
  },
};
