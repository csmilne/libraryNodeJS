var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');
var path = require('path');
const { expr } = require('jquery');

var app = express();

app.use(morgan('tiny'));
app.use('/css', express.static(path.join(__dirname,'/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname,'/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname,'/node_modules/jquery/dist')));

app.use(express.static(path.join(__dirname, '/public/')));
app.get('/', function(req, res){
    res.sendfile(path.join(__dirname, '/Views/index.html'));
});

app.listen(3000, function(){
    //to run debug at cmd enter: set DEBUG=* & node app.js
    //to run debug at cmd enter: set DEBUG=app & node app.js
    debug(`listening on port ${chalk.green('3000')}`);
});