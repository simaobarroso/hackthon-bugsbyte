//const inquiricao = require('../models/eventos')
var Evento = require('../models/eventos')

module.exports.getEventos = () => {
    return Evento
            .find()
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}
