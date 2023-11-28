const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const { connectDB } = require('./config/database');
const cors = require('cors')
// const logger = require('morgan');
// var createError = require('http-errors');

connectDB()

const app = express();

// Fournit une visibilité sur les requêtes entrantes dans la console
// app.use(logger('dev'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    // res.header('Access-Control-Allow-Origin', 'http://localhost:5174');
    // res.header('Access-Control-Allow-Origin', 'https://prodev-flax.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Facilitent le traitement des données utilisateur dans les routes en les mettant à disposition via req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Facilite la manipulation des cookies de la requête en les rendant disponibles via req.cookies
app.use(cookieParser());

// Permet de servir des fichiers statiques, comme des images ou des fichiers CSS, qui sont accessibles publiquement
app.use(express.static(path.join(__dirname, 'public')));

const router = require('./routes/routes');
app.use('/', router); 

module.exports = app;