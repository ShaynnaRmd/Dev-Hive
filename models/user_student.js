const mongoose = require('mongoose')

const userStudentSchema = new mongoose.Schema({
    email: String,
    password: String,
    // firstname: String,
    // lastname: String,
    // birth_date: String, 
    // gender: String,
    // number: String,
    // adresse: String
  });
  const UserStudent = mongoose.model('UserStudent', userStudentSchema);

  module.exports = UserStudent