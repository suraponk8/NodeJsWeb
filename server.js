const express = require('express');
const hbs = require('hbs');

var app = express();

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req,res) => {
  res.render('home.hbs')
});


app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
