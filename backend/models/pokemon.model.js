const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  name: { type: String, required: true },
  num: { type: Number, required: true },
  height: { type: String, required: true },
  weight: { type: String, required: true },
  category: { type: String, required: true },
  ability: { type: String, required: true },
}, {
  timestamps: true,
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
