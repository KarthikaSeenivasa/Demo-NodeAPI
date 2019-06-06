import { Request, Response } from "express";
import Country from "./AppModel";

// get all countries
export let allCountries = (req: Request, res: Response) => {
  let countries = Country.find((err: any, countries: any) => {
    if (err) {
      res.send("Error!");
    } else {
      res.send(countries);
    }
  });
};

// get country by id
export let getCountryById = (req: Request, res: Response) => {
    let country = Country.findOne({countryId:req.params.countryId}, (err: any, country: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(country);
      }
    });
  };

  // delete country by id
  export let deleteCountry = (req: Request, res: Response) => {
    let country = Country.deleteOne({countryId:req.params.countryId}, (err: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Succesfully Deleted");
      }
    });
  };

  // update country by id
  export let updateCountry = (req: Request, res: Response) => {
    console.log(req.body);
    let country = Country.findOneAndUpdate(
        {countryId:req.params.countryId},
      req.body,
      (err: any, country: any) => {
        if (err) {
          res.send(err);
        } else {
          res.send("Succesfully updated");
        }
      }
    );
  };

  // add country details
  export let addCountry = (req: Request, res: Response) => {
    var country = new Country(req.body);
  
    country.save((err: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(country);
      }
    });
  };