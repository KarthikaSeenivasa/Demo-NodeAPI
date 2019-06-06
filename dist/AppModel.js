"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoDBUrl = 'mongodb+srv://mongoMy1:' + encodeURIComponent('test123Pink') + '@cluster0-1pjen.azure.mongodb.net/test?retryWrites=true';
// connect to the database
mongoose.connect(mongoDBUrl, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Succesfully Connected!");
    }
});
// create schema for country
exports.CountrySchema = new mongoose.Schema({
    countryId: { type: Number, required: true },
    name: { type: String, required: true },
    languages: { type: Array }
});
const Country = mongoose.model("Country", exports.CountrySchema);
exports.default = Country;
