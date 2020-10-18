const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const port = process.env.port || 3000;

//const { expr } = require('jquery');

const app = express();

app.use(morgan('tiny'));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, '/Views/index.html'));
});

app.listen(port, () => {
    //to run debug at cmd enter: set DEBUG=* & node app.js
    //to run debug at cmd enter: set DEBUG=*app & node app.js
    debug(`listening on port ${chalk.green(port)}`);
});