var express = require('express');
var router = express.Router();
var path = require('path');
var UserPostSchema = require('../models/posts');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, '../public/views/index.html'))
});

router.get('/users', function(req, res, next) {
    return UserPostSchema.find({}).exec(function(err, users){
        if(err) throw new Error(err);
        res.send(JSON.stringify(users));

    });
});

module.exports = router;
