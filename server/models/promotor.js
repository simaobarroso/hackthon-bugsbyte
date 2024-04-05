const mongoose = require('mongoose')

var eventosSchema = new mongoose.Schema({
    _id: String,
    nome: String,
    email: String,
    contacto: String,
    foto: String,
    promotor: String,
});

module.exports = mongoose.model('promotor', promotorSchema)