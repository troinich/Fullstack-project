var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let TicketSchema = new Schema({
  event: Object,
  code: String,
  used: { type: Boolean, default: false }
})

var Ticket = mongoose.model("Ticket", TicketSchema);
module.exports = Ticket;