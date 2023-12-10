const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
        },
      password: {
        type: String,
        required: true,
        },
    
      profile: {
        firstname: String,
        lastname: String,
        description: String,
        profilePicture: String,
        stack: Array,
        quizz: [{
          stack: String,
          score: Number,
          description: String
        }]
      }
    });

const user = mongoose.model('user', userSchema);

module.exports = user