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
