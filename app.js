const express = require('express');
const cors = require('cors');
const app = express();

const controllers = require('./controllers');
const API = require('./constants/Api');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(API.ROOT_API, controllers);

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
});

module.exports = app;
