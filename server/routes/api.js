const express = require('express');
const router = express.Router();
const Event = require('../models/event');
const Ticket = require('../models/ticket')

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

//add an event
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

//show all tickets
router.get('/tickets', function (req, res, next) {
    Ticket.find({}).then(function (events) {
        res.send(events)
    })
});

// post one ticket
module.exports.post = async (req, res) => {
    
    try {

        // Finns biljetter? Får min beställning plats?
        // Uppdatera event med sålda biljetter

        // get event info
        let event = await Event.findById(req.body.event);

        if(event.tickets.available >= (event.tickets.sold + req.body.amount)){
            // Finns biljetter kvar!
            console.info('Tickets are available!');

            // Uppdatera event > sold tickets
            let newSold = event.tickets.sold + req.body.amount;

            await Event.findOneAndUpdate({ _id: req.body.event}, {
                tickets: {
                    sold: newSold,
                    available: event.tickets.available    
                }
            });

            // Skapa biljetter och skicka tillbaka till FE
            let tickets = [];

            for(i=0; i<req.body.amount; i++){

                let ticket = {
                    event: event,
                    code: uid(5),
                    used: false
                }

                tickets.push(ticket);
            }

            // write tickets to Mongo
            let resp = await Ticket.create(tickets);

            // Send to FrontEnd
            res.status(200).send(resp);

        } else {
            // Finns INTE biljetter kvar.
            console.info('Sorry, all tickets are sold.');
            res.status(200).send('Sorry, all tickets are sold.');
        }

    } catch(err) {
        res.status(500).send(err.stack);
    }
}

function uid(len){

    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

    let Arr = [];

    for(let i=0; i<len; i++){
        Arr.push(chars[Math.floor(Math.random()*chars.length)]);
    }

    return Arr.join('');
};



module.exports = router
