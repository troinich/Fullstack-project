const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose');
const routes = require('../routes/api')
const PORT = process.env.PORT || 8081
const app = express()

//connection to the local MongoDB
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

app.use(cors())
app.use(bodyParser.json())
app.use('/api', routes)

//error handling middleware NEXT
app.use(function (err, req, res, next) {
    res.status(422).send({ error: err.message })
});

//listen to port
app.listen(PORT, function () {
    console.log(`There is connection to port ${PORT}`)
});