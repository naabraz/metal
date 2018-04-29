const app = require('express')();

const route = require('../routes');
const middleware = require('../middlewares');
const config = require('../config');

middleware.middlewares(app);
route.routes(app);

module.exports = {
  start: () => {
    app.listen(config.app.port, (err) => {
      if (err) {
        return console.log('something bad happened', err);
      }

      console.log(`server is listening on ${config.app.port}`);

      return true;
    });
  },
};
