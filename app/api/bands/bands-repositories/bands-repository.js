const database = require('../../../managers/database');

const listBands = async () => database.listCollection('bands');
const addBand = async band => database.insertDocument(band, 'bands');

module.exports = {
  listBands,
  addBand,
};
