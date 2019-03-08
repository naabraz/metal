const database = require('../../../managers/database');

const listBands = async () => {
  const connection = await database.startConnection();
  const base = await database.getBase(connection);
  const collection = await database.getCollection(base, 'bands');

  const result = await collection.find().toArray();

  database.closeConnection(connection);

  return result;
};

module.exports = { listBands };
