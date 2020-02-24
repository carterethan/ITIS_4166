var express = require('express');
var router = express.Router();
var connection_database = require('../models/connectionDB');

router.get('/', function (req, res) {
    res.render('index');
});

router.get('/home', function (req, res) {
    res.render('index');
});

router.get('/about', function (req, res) {
    res.render('about');
});

router.get('/contact', function (req, res) {
    res.render('contact');
});

router.get('/connections', function (req, res) {
    var connection_array = connection_database.getConnections();

    //Checks for query string containing connectionID
    if(req.query.connectionID == undefined){
      //If no query connectionID in query string, render top connections page
      res.render('connections', {data: connection_array});
    }else{
      //If query string has connectionID, render the corresponding connection
      var connection_data = connection_database.getConnection(req.query.connectionID);
      res.render('connection', {data: connection_data});
    }
});

router.get('/connection/:connectionID', function (req, res) {
    var connection_data = connection_database.getConnection(req.params.connectionID);
    res.render('connection', {data: connection_data});
});

router.get('/savedConnections', function (req, res) {
    res.render('savedConnections');
});

router.get('/newConnection', function (req, res) {
    res.render('newConnection');
});

router.get('/*', function (req, res) {
    res.send('Error 404: Page not found.');
});

module.exports = router;
