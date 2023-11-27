const mongoose = require("mongoose")
require('dotenv').config()

const DB_URI = process.env.MONGODB_URI

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        // Ajout de l'objet de configuration pour mongoose.connect: useNewUrlParser: true et useUnifiedTopology: true. 
        // Ces options sont souvent nécessaires pour éviter les avertissements dépréciés et garantir une connexion appropriée à MongoDB.
        console.log('Connected to the DB')
    } catch (error) {
        console.error('Error connecting to the database:', error)
        process.exit(1)
    }
}

module.exports = { DB_URI, connectDB }