const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8081
const app = express()
var Event = require('../models/event')

//CONNECT TO MONGOdb
mongoose
    .connect('mongodb://localhost/MEVN', { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));
mongoose.Promise = global.Promise;

/* connection to cloud db
mongoose
.connect('mongodb+srv://GirlsPower:password12345@tickets-k4bxz.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));
 */
app.use(bodyParser.json())
app.use(cors())

//initialize routes
//app.use(require('../routes/api'))

app.get('/', function (req, res) {
    res.send('Please use /api/ route')
});

//show all
app.get('/api/events', function (req, res) {
    Event.getEvents(function (err, events) {
        if (err)
            throw err;
        res.json(events)
    })

});

//show one
app.get('/api/events/:_id', function (req, res) {
    Event.getEventById(req.params._id, function (err, event) {
        if (err)
            throw err;
        res.json(event)
    })

});

//add new
app.post('/api/events/', function (req, res) {
    var event = req.body;
    Event.addEvent(event, function (err, event) {
        if (err)
            throw err;
        res.json(event)
    })
})

//change one
app.put('/api/events/:_id', function (req, res) {
    var id = req.params._id;
    var event = req.body;
    Event.updateEvent(id, event, {}, function (err, event) {
        if (err)
            throw err;

        res.json(event);
    })
})

//delete one 
app.delete('/api/events/:_id', function (req, res) {
    var id = req.params._id;
    Event.deleteEvent(id, function (err, event) {
        if (err)
            throw err;
        res.json(event)
    })
})


app.listen(PORT, function () {
    console.log(`There is connection to port ${PORT}`)
});