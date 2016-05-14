var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var port = process.env.PORT || 3000;

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('get');
});

app.post('/', function (req, res) {
  res.render('post');
});

app.use(function (err, req, res, next) {
  res.status(500).send('Internal Server Error');
})

app.use(function (req, res) {
  res.status(404).send('Page Not Found');
})

app.listen(port, function () {
  console.log('App listening on port ' + port + '!');
});