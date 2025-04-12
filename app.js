var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signupRouter=require('./routes/s_signup');
var validateCredRouter=require('./routes/s_validateCred');
var getProductRouter=require("./routes/s_getProducts");
var session=require("express-session");
var checkSessionRouter=require("./routes/checkSession");
var addProductRouter=require('./routes/addProduct');
var logoutRouter=require('./routes/s_logout');


var app = express();
app.use(session({
  secret:"klhpj",
  cookie:{
    originalMaxAge:300000,
    secure:false
  }
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/new/signup",signupRouter);
app.use('/validate/data',validateCredRouter)
app.use('/getProduct/data',getProductRouter)
app.use('/session/checkSession',checkSessionRouter);
app.use('/add/data',addProductRouter)
app.use('/log/out',logoutRouter);

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
