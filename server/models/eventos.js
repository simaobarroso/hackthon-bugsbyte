const mongoose = require('mongoose')
/*
var localSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
    },
    distrito: String,
    fregusesia: String,
    morada: String
});
*/

var dataSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
    },
    diaDaSemana: String,
    dia: Number,
    mes: String,
    ano: Number,
    hora: String
});

var eventosSchema = new mongoose.Schema({
    _id: Number,
    titulo: String,
    subtitulo: String,
    categorias: String,
    horario: String,
    bilheteira: String,
    fotos: String,
    meteorologia: String,
    lotacao: Number,
    descricao: String,
    duracao: Number,
    distrito: String,
    concelho: String,
    freguesia: String,
    casaEspetaculo: String,
    morada: String,
    promotor: String,
    data: dataSchema
});


module.exports = mongoose.model('eventos', eventosSchema)