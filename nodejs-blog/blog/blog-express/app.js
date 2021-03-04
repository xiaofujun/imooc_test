var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const {client: redisClient} = require('./db/redis');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const blogRouter = require('./routes/blog');
const userRouter = require('./routes/user');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// 日志的打印
if(process.env.NODE_ENV != "dev") {
  const filename = path.join(__dirname, 'log', 'access.log');
  const accessStream = fs.createWriteStream(filename, {
    flags: 'a'
  });

  app.use(logger('combined', {
    stream: accessStream
  }));
} else {
  app.use(logger('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// 设置 session 
app.use(session({
  secret: '@_#%xfj&zyy',
  cookie: { 
    httpOnly: true,  // 默认： true
    path: '/', // 默认： /
    maxAge: 24 * 60 * 60 * 1000, // 过期时间： ms
  },
  resave: false,
  saveUninitialized: false,
  store: new RedisStore({
    client: redisClient
  })
}));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api/blog', blogRouter);
app.use('/api/user', userRouter);

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
