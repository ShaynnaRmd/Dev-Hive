const mongoose = require('mongoose')
const user_students = require('./user_students')

// Model qui permer de stocker les tokens générés pour la réinitialisation de mot de passe

const tokenSchema = new mongoose.Schema({
    token: String,
    user_student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: user_students
    }
})

const token = mongoose.model('token', tokenSchema)

module.exports = token