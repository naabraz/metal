const app = require('express')();

const route = require('../routes');
const middleware = require('../middlewares');
const { port } = require('../config').app;

middleware.middlewares(app);
route.routes(app);

const start = () => {
  app.listen(port, (err) => {
    if (err) {
      return Promise.reject(new Error('There was an error when starting application'));
    }

    return true;
  });
};

module.exports = { start };
