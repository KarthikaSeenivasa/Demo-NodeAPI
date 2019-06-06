"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AppController = require("../AppController");
class AppRouter {
    /**
     * Initialize the AppRouter in constructor
     */
    constructor() {
        this.router = express_1.Router();
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
exports.AppRouter = AppRouter;
// Create the instance for AppRouter, and export 
const appRoutes = new AppRouter();
appRoutes.init();
exports.default = appRoutes.router;
