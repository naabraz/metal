const bandsRepository = require('../bands-repositories');

module.exports = {
  listBands: async () => bandsRepository.listBands(),
  insertBand: async (band) => {
    bandsRepository.insertBand(band);
  },
};
