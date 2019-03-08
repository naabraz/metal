const bandsService = require('../bands-services');

const listBands = async () => bandsService.listBands();
const addBand = async band => bandsService.addBand(band);

module.exports = {
  listBands,
  addBand,
};
