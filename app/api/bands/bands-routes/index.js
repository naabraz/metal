const bands = require('./bands-routes');

module.exports = {
  routes: (app) => {
    bands.listBands(app);
  },
};
