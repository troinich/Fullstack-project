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