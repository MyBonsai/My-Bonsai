const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const specieSchema = new Schema({
  specie: String,
  scientific_name: String,
  description: String,
  weather: String,
  temperature: String,
  watering: String,
  substratum: String,
  feeding: String,
  photo: String,
  location: [String],
});

const Specie = mongoose.model('Specie', specieSchema);
module.exports = Specie;
