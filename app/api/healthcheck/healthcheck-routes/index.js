const healthcheck = require('./healthcheck-routes');

module.exports = {
  routes: (app) => {
    healthcheck.healthCheck(app);
  },
};
