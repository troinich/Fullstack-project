const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose');

const app = express()

//CONNECT TO MONGOdb
mongoose
.connect('mongodb://localhost/MEVN', { useNewUrlParser: true })
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));
mongoose.Promise = global.Promise;

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

//initialize routes
app.use(require('../routes/api'))


//app.set('port', process.env.PORT || 8081);
app.listen(process.env.PORT || 8081, function(){
    console.log('There is connection to backend port')
})

/* const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var Post = require("../models/post");


const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

/* const mongodb_conn_module = require('./mongodbConnModule');
var db = mongodb_conn_module.connect(); */

/* // Fetch all posts
app.get('/posts', (req, res) => {
    Post.find({}, 'name place date start end seats', function (error, posts) {
      if (error) { console.error(error); }
      res.send({
        posts: posts
      })
    }).sort({_id:-1})
  })

// Add new post
app.post('/posts', (req, res) => {
    var name = req.body.name;
		var place = req.body.place;
		var date = req.body.date;
    var start = req.body.start;
    var end = req.body.end;
		var seats = req.body.seats;
    var new_post = new Post({
			name: name,
			place: place,
			date: date,
			start: start,
			end: end,
			seats: seats
    })
  
    new_post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true,
        message: 'Post saved successfully!'
      })
    })
  })

  /* app.put('/posts/:id', (req, res) => {
	var db = req.db;
	Post.findById(req.params.id, 'name place date start end seats', function (error, post) {
	  if (error) { console.error(error); }
		post.name = req.body.name
		post.place = req.body.place
		post.date = req.body.date
    post.start = req.body.start
    post.end = req.body.end
    post.seats = req.body.seats
	  
	  post.save(function (error) {
			if (error) {
				console.log(error)
			}
			res.send({
				success: true
			})
		})
	})
}) */

/*app.delete('/posts/:id', (req, res) => {
	var db = req.db;
	Post.remove({
		_id: req.params.id
	}, function(err, post){
		if (err)
			res.send(err)
		res.send({
			success: true
		})
	})
})

app.get('/post/:id', (req, res) => {
	var db = req.db;
	Post.findById(req.params.id, 'name place date start end seats', function (error, post) {
	  if (error) { console.error(error); }
	  res.send(post)
	})
})

app.listen(process.env.PORT || 8081) */