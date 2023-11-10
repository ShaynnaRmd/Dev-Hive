const mongoose = require('mongoose')

const userCompagnySchema = new mongoose.Schema({
    email: String,
    password: String,
    // firstname: String,
    // lastname: String,
    // birth_date: String, 
    // gender: String,
    // number: String,
    // adresse: String
  });
  const UserCompagny = mongoose.model('UserCompagny', userCompagnySchema);

  module.exports = UserCompagny