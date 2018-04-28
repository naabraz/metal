'use strict';

const bandsService = require('../bands-services');

module.exports = {
    listBands: async () => await bandsService.listBands(),
    insertBand: async (band) => await bandsService.insertBand(band)
}