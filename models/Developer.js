let mongoose = require('mongoose');

let DeveloperSchema = new mongoose.Schema({
    name: {type: String},
    family: {type: String}
}, {
    collection: 'developers'
});

module.exports = mongoose.model('Developer', DeveloperSchema);