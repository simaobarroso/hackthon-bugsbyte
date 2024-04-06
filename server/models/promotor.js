const mongoose = require('mongoose')

var promotorSchema = new mongoose.Schema({
    _id: Number,    
    email: String,
    contacto: String,
    foto: String,
    promotor: String,
});

module.exports = mongoose.model('promotor', promotorSchema)