const express = require('express');
const router = express.Router();
const Post = require('../models/post');

//get a list of events from db for a client
/* router.get('/posts', function (req, res, next) {
    Post.find({}).then(function (posts) {
        res.send(posts);
    })
}) */

router.get('/posts', function(req, res, next) {
  Post.find(function (err, posts) {
    if (err) return next(err);
    res.json(posts);
  });
});



//a list of events for the admin
router.get('/admin', function (req, res, next) {
    Post.find({}).then(function (posts) {
        res.send(posts);
    })
})

//add a new event to db
/* router.post('/admin', function (req, res, next) {
    Post.create(req.body).then(function (post) {
        res.send(post);
    }).catch(next);
}) */

router.post('/posts', function(req, res, next) {
    Post.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

//show a ticket to buy
router.get('/ticket/:id', function (req, res, next) {
    res.send({ type: 'GET' })
})

module.exports = router