'use strict';

var express = require('express'),
    fs = require('fs'),
    apiRouter = require('./api/router'),
		replaceStream = require('replacestream'),
		React = require('react'),
		App = React.createFactory(require('./views/main')),
		htmlApp = React.renderToString(App()),
    app = express();

app.get('/', function(req, res, next) {
	//console.log('asdasd');
	var output = fs.createReadStream('public/index.html');
  res.set('Content-Type', 'text/html');
  output
    .on('error', function(err) {
      return next(err);
    })
		.pipe(replaceStream('!output', htmlApp))
		.pipe(res);
});

app.use(express.static('public'));
app.use('/api', apiRouter);

app.use(function(req, res, next) {
  res.statusCode = 404;
  res.send('Not Found');
});

app.use(function(err, req, res, next) {
  res.statusCode = 500;
  res.send('Error: ' + err);
});

app.listen(3033, function(err) {
  if (err) throw err;
  console.log('App listening on 3033 port');
});

