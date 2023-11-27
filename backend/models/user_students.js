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
    description: String,
    mentoring: Boolean,
    personnal_information: {
      firstname: String,
      lastname: String,
      birthdate: Date,
      country: String,
      city: String,
      profile_picture: String
    },

    contact: {
      email: String,
      phone_number: String,
      linkedin: String,
      github: String
    },

    professionnal_information: {
      wanted_job: String,
      cv: String,
      certification: [{title: String}],
      stack: [{
        name: String,
        level: String,
        description: String
      }],

      school: {
        name: String,
        country: String,
        city: String
      },

      education: [{
        name: String,
        school: String,
        beginning_date: Date,
        ending_date: Date
      }]
    },

    following_page: {
      students: [{name: String}],
      companies: [{name: String}]
    },

    mentoring_reservation: [{
      title: String,
      mentor_id: String,
      date: Date,
      duration: Number,
      goals: String,
      status: Buffer
    }]
  }
});

const user_students = mongoose.model('user_students', user_studentsSchema);

module.exports = user_students