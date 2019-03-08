const app = require('express')();

const { bands, healthcheck } = require('../routes');
const { middlewares } = require('../middlewares');
const { port } = require('../config').app;

middlewares(app);

bands.routes(app);
healthcheck.routes(app);

const start = () => {
  app.listen(port, (err) => {
    if (err) {
      return Promise.reject(new Error('There was an error when starting application'));
    }

    return true;
  });
};

module.exports = { start };
