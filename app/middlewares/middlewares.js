const bodyParser = require('body-parser');

const middlewares = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use((err, request, response, next) => {
    response.status(500).send('Something broke!');
    next();
  });
};

module.exports = { middlewares };
