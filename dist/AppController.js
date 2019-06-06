"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppModel_1 = require("./AppModel");
// get all countries
exports.allCountries = (req, res) => {
    let countries = AppModel_1.default.find((err, countries) => {
        if (err) {
            res.send("Error!");
        }
        else {
            res.send(countries);
        }
    });
};
// get country by id
exports.getCountryById = (req, res) => {
    let country = AppModel_1.default.findOne({ countryId: req.params.countryId }, (err, country) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(country);
        }
    });
};
// delete country by id
exports.deleteCountry = (req, res) => {
    let country = AppModel_1.default.deleteOne({ countryId: req.params.countryId }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully Deleted");
        }
    });
};
// update country by id
exports.updateCountry = (req, res) => {
    console.log(req.body);
    let country = AppModel_1.default.findOneAndUpdate({ countryId: req.params.countryId }, req.body, (err, country) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully updated");
        }
    });
};
// add country details
exports.addCountry = (req, res) => {
    var country = new AppModel_1.default(req.body);
    country.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(country);
        }
    });
};
