const express = require('express');
const router = express.Router();
const Post = require('../models/post');


//var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/posts', function (req, res, next) {
    Post.find({}, function (err, posts) {
        if (err) return next(err);
        /*   res.json(posts);
        });
      }); */
        res.send({
            posts: posts
        })
    }).sort({ _id: -1 })
})

//a list of events for the admin
router.get('/admin', function (req, res, next) {
    Post.find({}, function (err, posts) {
        if (err) return next(err);
        /*   res.json(posts);
        });
      }); */
        res.send({
            posts: posts
        })
    }).sort({ _id: -1 })
})

//add a new event to db
/* router.post('/admin', function (req, res, next) {
    Post.create(req.body).then(function (post) {
        res.send(post);
    }).catch(next);
}) */


/* router.post('/new', function(req, res, next) {
    Post.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
 */

router.post('/new', function (req, res) {
    //get data from the view and add to mongoDB
    let resp = Post.create(req.body);
    console.log(resp);
    res.status(200)
})

//show a ticket to buy
router.get('/ticket/:id', function (req, res, next) {
    res.send({ type: 'GET' })
})

module.exports = router
