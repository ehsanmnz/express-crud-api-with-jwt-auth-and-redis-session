let mongoose = require('mongoose');

let url = "mongodb://127.0.0.1:27017/crud_api_with_jwt_auth_and_redis_session";

mongoose.connect(url, {
    useMongoClient: true
});

let db = mongoose.connection;

require('../lib/pagination');

db.on('error', (err) => {console.log(err);});

module.exports = db;