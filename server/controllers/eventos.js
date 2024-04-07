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

module.exports.diferentesCategorias = () => {
    return Evento
            .distinct("categorias")
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.queryBD = (a) => {
    return Evento
            .find(a)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.addEvento = p => {
    return Evento
    .create(p)
        .then(dados=>{
            return dados
        })
        .catch(erro =>{
            return erro
        })

}
