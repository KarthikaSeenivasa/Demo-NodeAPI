import * as mongoose from "mongoose";

const mongoDBUrl = 'mongodb+srv://mongoMy1:'+encodeURIComponent('test123Pink')+'@cluster0-1pjen.azure.mongodb.net/test?retryWrites=true';
// connect to the database
mongoose.connect(mongoDBUrl, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Succesfully Connected!");
  }
});

// create interface for country
export interface ICountry extends mongoose.Document {
    countryId: number;
    name: string;
    languages: Array<string>;
}
// create schema for country
export const CountrySchema = new mongoose.Schema({
  countryId: { type: Number, required: true },
  name: { type: String, required: true },
  languages: { type: Array }
});

const Country = mongoose.model<ICountry>("Country", CountrySchema);
export default Country;