const database = require('../../../managers/database');

const listBands = async () => {
  const connection = await database.startConnection();
  const base = await database.getBase(connection);
  const collection = await database.getCollection(base, 'bands');

  const result = await collection.find().toArray();

  database.closeConnection(connection);

  return result;
};

const addBand = async (band) => {
  const connection = await database.startConnection();
  const base = await database.getBase(connection);
  const collection = await database.getCollection(base, 'bands');

  try {
    collection.insertOne(band);
    database.closeConnection(connection);
  } catch (error) {
    Promise.reject(new Error('There was an error when adding the band'));
  }
};

module.exports = {
  listBands,
  addBand,
};
