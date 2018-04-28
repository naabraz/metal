'use strict';

const database = require('../../../managers/database');

module.exports = {
    listBands: async () => await database.list(),
    insertBand: async (band) => await database.insert(band)
}