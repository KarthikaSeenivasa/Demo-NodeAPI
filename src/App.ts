import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as swaggerUi from "swagger-ui-express";

const swaggerDoc = require('./swagger.json');
import AppRouter from './routes/AppRouter';

// to Create and configure an ExpressJS web server.
class App {

  // add ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    //Enable CORS for CRUD HTTP methods
    this.express.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
  }

  // Configure API endpoints.
  private routes(): void {
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
    this.express.use('/api/v1/countries', AppRouter);
    // endpoint for swagger UI
    router.use("/swagger-doc", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
  }

}

export default new App().express;
