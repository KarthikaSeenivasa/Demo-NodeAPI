import {Router, Request, Response, NextFunction} from 'express';

import * as AppController from '../AppController';

export class AppRouter {
  router: Router

  /**
   * Initialize the AppRouter in constructor
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  //initialization
  init() {
    this.router.get("/", AppController.allCountries);
    this.router.get("/:countryId", AppController.getCountryById);
    this.router.post("/", AppController.addCountry);
    this.router.put("/:countryId", AppController.updateCountry);
    this.router.delete("/:countryId", AppController.deleteCountry);
  }

}

// Create the instance for AppRouter, and export 
const appRoutes = new AppRouter();
appRoutes.init();

export default appRoutes.router;
