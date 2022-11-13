const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })

var connection = mongoose.connection

connection.on('error', () => {
        console.log('Mongo DB Connection failed')
})

// var connection = mongoose.connection

connection.on('connected', () => {
        console.log('Mongo DB Connection successful!')
})

module.exports = mongoose