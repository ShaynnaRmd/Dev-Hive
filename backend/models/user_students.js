const mongoose = require('mongoose')

// Création de la collection stockant les utilisateurs sous le statut d'étudiant
const user_studentsSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
    },
  password: {
    type: String,
    required: true,
    },
  // reset_token: String,

  profile: {
    firstname: String,
    lastname: String,
    description: String,
    profile_picture: String,
    stack: Array,
    quizz: [{
      stack: String,
      score: Number,
      description: String
    }]
  }
});

const user_students = mongoose.model('user_students', user_studentsSchema);

module.exports = user_students