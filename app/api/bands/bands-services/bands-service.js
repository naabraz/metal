const bandsRepository = require('../bands-repositories');

module.exports = {
  listBands: async () => bandsRepository.listBands(),
};
