"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require('./swagger.json');
const AppRouter_1 = require("./routes/AppRouter");
// to Create and configure an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        //Enable CORS for CRUD HTTP methods
        this.express.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }
    // Configure API endpoints.
    routes() {
        // create router
        let router = express.Router();
        // route handler
        router.get('/', (req, res, next) => {
            res.json({
                message: 'API works!'
            });
        });
        // API endpoints
        this.express.use('/', router);
        this.express.use('/api/v1/countries', AppRouter_1.default);
        // endpoint for swagger UI
        router.use("/swagger-doc", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
    }
}
exports.default = new App().express;
