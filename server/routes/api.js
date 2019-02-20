const express = require('express');
const router = express.Router();
const Event = require('../models/event');


//show all events
router.get('/events', function (req, res, next) {
    Event.find({}).then(function (events) {
        res.send(events)
    })
});

//show one
router.get('/events/:_id', function (req, res) {
    Event.findById({_id:req.params._id}).then(function (event) {
     res.send(event)
    })
})


router.post('/events', function (req, res, next) {
    //create a new instance of Schema var event = new Event(req.body);
    //save do DB event.save();`
    //or instead of new instance and save =>
    Event.create(req.body).then(function (event) {
        res.send(event)
    }).catch(next);
})


//update one
router.put('/events/:id', function (req, res, next) {
    Event.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(function (event) {
        res.send(event)
    })
})

//delete one 
router.delete('/events/:id', function (req, res, next) {
    Event.findByIdAndDelete({ _id: req.params.id }).then(function (event) {
        res.send(event)
    })
})

module.exports = router
