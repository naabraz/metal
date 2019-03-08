const bandsRepository = require('../bands-repositories');

const listBands = async () => bandsRepository.listBands();

module.exports = { listBands };
