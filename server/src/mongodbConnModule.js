var mongoose = require('mongoose');

module.exports.connect = function() {
/* mongoose
.connect('mongodb://localhost/testaroo', { useNewUrlParser: true })
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));
}
 */
mongoose.connect('mongodb://localhost/MEVN'); 
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});
return db;
}