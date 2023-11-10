require('dotenv').config();

const DB_URI = process.env.MONGODB_URI;

module.exports = { DB_URI };