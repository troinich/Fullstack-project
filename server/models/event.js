const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let eventSchema = new Schema({
    name: String,
    place: String,
    date: String,
    start: String,
    end: String,
    price: Number,
    available: Number,
    sold: Number
})

let Event = mongoose.model('event', eventSchema);
module.exports = Event;

//get all events
module.exports.getEvents = function (callback, limit) {
    Event.find(callback).limit(limit)
}

//get one event
module.exports.getEventById = function (id, callback) {
    Event.findById(id, callback)
}

//add an event
module.exports.addEvent = function (event, callback) {
    Event.create(event, callback)
}

//update en event
module.exports.updateEvent = function (id, event, options, callback) {
    var query = { _id: id };
    var update = {
        name: event.name,
        place: event.place,
        date: event.date,
        start: event.start,
        end: event.end,
        price: event.price,
        available: event.available,
        sold: event.sold
    };
        
    Event.findOneAndUpdate(query, update, options, callback)
}

//delete one event
module.exports.deleteEvent = function (id, callback) {
    var query = { _id: id };
     Event.remove(query, callback)
}