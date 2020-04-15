var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({ secret: 'secret'}));

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

//Import route files for coursedetails and index
var routes = require('./routes/mainController.js');
var user_routes = require('./routes/userController.js');
var connection_routes = require('./routes/connectionController.js');


app.use('/', connection_routes);

app.use('/savedConnections', user_routes);
// app.use('/connections/', connection_routes);
// app.use('/connection/', connection_routes);


app.listen(3000);
