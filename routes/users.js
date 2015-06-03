var express = require('express');
var router = express.Router();
var posts = require('../models/posts');

/* GET users listing. */
router.get('/', function(req, res, next) {
 posts.find(function(err, users){
   if(err) {
       console.log(err);
       return next (err);
   }
     console.log(users);
    res.json(users);

 });
});

router.post('/', function(req, res, next) {
  posts.create(req.body, function(err, users){
    if(err) return next (err);
    res.json(users);

  });
});

module.exports = router;
