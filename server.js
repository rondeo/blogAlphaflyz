require('./server/bin/connectDB');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}))
app.use(bodyParser.json({ limit: '50mb' }));

module.exports = app;