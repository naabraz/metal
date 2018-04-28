'use strict';

const app = require('express')();

const route = require('../routes');
const middleware = require('../middlewares');
const config = require('../config');

middleware.middlewares(app);
route.routes(app);

module.exports = {
    start: () => {
        const port = config.app.port;

        app.listen(port, (err) => {
            if (err) {
                return console.log('something bad happened', err);
            }

            console.log(`server is listening on ${port}`)
        });
    }
}
