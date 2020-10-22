const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');


//const { expr } = require('jquery');

const app = express();
const port = process.env.port || 3000;



app.use(morgan('tiny'));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use(express.static(path.join(__dirname, '/public/')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [
    { link: '/books', title: 'Book' },
    { link: '/authors', title: 'Author' }
];
const bookRouter = require('./src/routes/bookRoutes')(nav);

app.use('/books', bookRouter);
app.get('/', (req, res) => {
    res.render(
        'index',
        {
            nav: [{ link: '/books', title: 'Books' },
            { link: '/authors', title: 'Authors' }],
            title: 'Library'
        });
});

app.listen(port, () => {
    //to run debug at cmd enter: set DEBUG=* & node app.js
    //to run debug at cmd enter: set DEBUG=*app & node app.js
    debug(`listening on port ${chalk.green(port)}`);
});