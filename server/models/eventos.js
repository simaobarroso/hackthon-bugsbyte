const mongoose = require('mongoose')

var localSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
    },
    distrito: String,
    fregusesia: String,
    morada: String
});

var eventosSchema = new mongoose.Schema({
    _id: String,
    titulo: String,
    subtitulo: String,
    categorias: String,
    horario: String,
    data: String,
    bilheteira: String,
    fotos: String,
    duracao: Number,
    meteorologia: String,
    lotacao: Number,
    descricao: String,
    promotor: String,
    casaEspetaculo: String,
    local: [localSchema]
});

module.exports = mongoose.model('eventos', eventosSchema)