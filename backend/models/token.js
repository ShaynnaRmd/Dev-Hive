const mongoose = require('mongoose')
const user = require('./user')

// Model qui permer de stocker les tokens générés pour la réinitialisation de mot de passe

const tokenSchema = new mongoose.Schema({
    token: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: user
    }
})

const token = mongoose.model('token', tokenSchema)

module.exports = token