const bandsRepository = require('../bands-repositories');

const listBands = async () => bandsRepository.listBands();
const addBand = async band => bandsRepository.addBand(band);

module.exports = {
  listBands,
  addBand,
};
