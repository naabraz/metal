const bandsService = require('../bands-services');

module.exports = {
  listBands: async () => bandsService.listBands(),
};
