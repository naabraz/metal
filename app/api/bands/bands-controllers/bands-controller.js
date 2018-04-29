'use strict';

const bandsService = require('../bands-services');

module.exports = {
    listBands: async () => await bandsService.listBands(),
    insertBand: async (request) => {
        const band = {
            name: request.body.name,
            country: request.body.country
        }

        await bandsService.insertBand(band)
    }
}