var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose")
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const {DB_URI} = require("./config")

var app = express();

mongoose.connect(DB_URI)
  .then((date) => console.log({date : "bd connected"}))
  .catch((err) => console.log(err))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors('*'));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;