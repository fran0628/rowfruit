var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connection = require("./utilities/db");
const Promise = require("bluebird");
require("dotenv").config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

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


let farmerRouter = require("./routes/Blog/farmerUser");
app.use("/api/farmer", farmerRouter);

let postRouter = require("./routes/Blog/post");
app.use("/api/post", postRouter);

let customerRouter = require("./routes/Customer/customerProduct");
app.use("/api/customer",customerRouter);

let MapRouter = require("./routes/Map/Map");
app.use("/api/Map/Map",MapRouter);

let FruitRouter = require("./routes/Map/Fruit");
app.use("/api/Map/Fruit",FruitRouter);

let mainRouter = require("./routes/MainProduct/MainProduct");
app.use("/api/mainproduct", mainRouter)

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

app.listen(5000, async () => {
	await connection.connectAsync();
	console.log(`我跑起來了，在port 5000`);
});


module.exports = app;
