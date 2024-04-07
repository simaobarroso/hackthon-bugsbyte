var Promotores = require('../models/promotor')

module.exports.getPromotores = () => {
    return Promotores
            .find()
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}


module.exports.addPromotores = p => {
    return Promotores
    .create(p)
        .then(dados=>{
            return dados
        })
        .catch(erro =>{
            return erro
        })

}