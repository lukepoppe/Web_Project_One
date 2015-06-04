var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReviewSchema = new Schema({
    name: String,
    rating: String,
    note: String
});

module.exports = mongoose.model('Reviews', ReviewSchema);
