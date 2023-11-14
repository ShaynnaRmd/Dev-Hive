const mongoose = require('mongoose')

// Création de la collection stockant les utilisateurs sous le statut d'entreprise
const user_companiesSchema = new mongoose.Schema({
  email: String,
  password: String,
  profile: {
    name: String,
    logo: String,
    sector: String,
    compagny_length: Number,
    location: {
      country: String,
      city: String
    },

    description: {
      baseline: String,
      body: String,
      stack: [{name: String}]
    },

    vacancy: [{
      title: String,
      contract_type: String,
      duration: String,
      pins_profile: Array
    }],

    notation: [{
      author: String,
      body: String,
      notation: Number,
      date: Date
    }]
  }
});

const user_companies = mongoose.model('user_companies', user_companiesSchema);

module.exports = user_companies