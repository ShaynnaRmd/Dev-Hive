const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { connectDB } = require('./config/database');
// var createError = require('http-errors');

connectDB()

const app = express();

// Fournit une visibilité sur les requêtes entrantes dans la console
app.use(logger('dev'));

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