var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserPostSchema = new Schema({
    title: String,
    content: {type: String, required: true},
    date: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('UserPost', UserPostSchema);