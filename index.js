var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', function (req, res) {
  res.send('Hello POST!');
});

app.use(function (err, req, res, next) {
  res.status(500).send('Internal Server Error');
})

app.use(function (req, res) {
  res.status(404).send('Page Not Found');
})

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});