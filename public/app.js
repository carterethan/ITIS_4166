var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

//Import route files for coursedetails and index
var routes = require('./routes/routes.js');

app.use('/', routes);

app.listen(3000);
