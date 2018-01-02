let express           = require('express');
let path              = require('path');
let logger            = require('morgan');
let cookieParser      = require('cookie-parser');
let bodyParser        = require('body-parser');

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./bootstrap/init')(app);
require('./routes')(app);
require('./services/errorHandler')(app);

module.exports = app;
