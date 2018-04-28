'use strict';

const bandsRepository = require('../bands-repositories');

module.exports = {
    listBands: async () => await bandsRepository.listBands(),
    insertBand: async (band) => await bandsRepository.insertBand(band)
}