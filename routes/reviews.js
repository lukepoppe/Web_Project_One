var express = require('express');
var router = express.Router();
//var passport = require('passport');
var path = require('path');
var Reviews = require('../models/reviewSchema');

router.get('/getReviews', function(req, res, next) {
    console.log("Getting Reviews");
    Reviews.find({}, null, function(err, data){
        console.log("Here's the Reviews", data);
        res.send(data);
    });
});

router.post('/addReviews', function(req,res,next) {
    Reviews.create(req.body, function (err, post) {
        if (err)
            next(err);
        else
            res.redirect('/');
    });
});

module.exports = router;