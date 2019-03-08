const bandsService = require('../bands-services');

const listBands = async () => bandsService.listBands();

module.exports = { listBands };
