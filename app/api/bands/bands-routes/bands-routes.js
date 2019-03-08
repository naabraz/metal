const bandsController = require('../bands-controllers');

const listBands = (app) => {
  app.get('/bands', async (request, response, next) => {
    try {
      const bands = await bandsController.listBands();

      response.json(bands);
    } catch (error) {
      next(error);
    }
  });
};

const addBand = (app) => {
  app.post('/bands', async (request, response, next) => {
    const { body } = request;

    try {
      const result = bandsController.addBand(body);

      response.json(result);
    } catch (error) {
      next(error);
    }
  });
};

module.exports = {
  listBands,
  addBand,
};
