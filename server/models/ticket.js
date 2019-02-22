var mongoose = require("mongoose");
var Schema = mongoose.Schema;
/* 
var PostSchema = new Schema({
  name: String,
  place: String,
  date: String,
  start: String,
  end: String,
  total: Number,
  sold: Number,
  price: Number,
  seats: String

}); */

let TicketSchema = new Schema({
  event: Object,
  code: String,
  used: { type: Boolean, default: false }
})

var Ticket = mongoose.model("Ticket", TicketSchema);
module.exports = Ticket;