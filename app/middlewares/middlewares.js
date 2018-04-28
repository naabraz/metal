'use strict';

const bodyParser = require('body-parser');

module.exports = {
    middlewares: (app) => {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));
        
        app.use((err, request, response, next) => {
            console.log(err);
            response.status(500).send('Something broke!');
        });
    }
}