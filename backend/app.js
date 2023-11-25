var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
<<<<<<< HEAD
const mongoose = require("mongoose");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { DB_URI} = require('./config')

var app = express();

mongoose.connect(DB_URI)
  .then((date) => console.log({date: 'db connected'}))
  .catch((err) => console.log(err))

=======
const cors = require('cors');

var indexRouter = require('./routes/index');

var app = express();

>>>>>>> 74a8a81f2a98228eed45a8b7b9b94ca53590e300
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
<<<<<<< HEAD

app.use('/', indexRouter);
app.use('/users', usersRouter);
=======
app.use(cors('*'));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
>>>>>>> 74a8a81f2a98228eed45a8b7b9b94ca53590e300

module.exports = app;
