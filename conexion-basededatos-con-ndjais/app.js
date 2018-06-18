var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let expresssessions = require('express-session'); //añadido
let flash = require('connect-flash'); //añadido

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let admins =require('./routes/admin'); //añadido
let loginFlash = require('./routes/login-flash'); //añadido
let integration =require('./routes/integration')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


//Gestión de sesiones (cookies)

app.use(expresssessions({
  secret: 'GeekshubsAcademy',
  name: 'SesionGeek',
  resave: true,
  saveUninitialized: true
}));

app.use(flash()); //añadido, para que funcione flash y siempre es deadjo de gestion de sesiones

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin',admins); //añadido
app.use('/login-flash',loginFlash); //añadido
app.use('/integration',integration);

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

module.exports = app;