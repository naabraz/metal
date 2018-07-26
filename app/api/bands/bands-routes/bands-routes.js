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
};
