var mongoose = require("mongoose");
var Schema = mongoose.Schema;

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

});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;