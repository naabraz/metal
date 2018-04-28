'use strict';

const bandsController = require('../bands-controllers');

module.exports = {
    listBands: (app) => {
        app.get('/bands', async (request, response, next) => {
            try {
                
                const bands = await bandsController.listBands();

                response.json(bands);
            } catch (error) {
                next(error);
            }
        });
    },

    insertBand: (app) => {
        app.post('/bands/insert', async (request, response, next) => {
            try {

                const band = {
                    name: request.body.name
                }

                bandsController.insertBand(band);

                response.json({success: true});
            } catch (error) {
                next(error);
            }
        });
    }
}