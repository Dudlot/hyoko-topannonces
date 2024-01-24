const { Add } = require("../../db/sequelize")
const { ValidationError } = require('sequelize')

module.exports = (app) => {
    app.put('/api/adds/:id', (req, res) => {
        const id = req.params.id
        Add.update(req.body, {
            where: { id: id }
        })
        .then(_ => {
            return Add.findByPk(id).then(add => {
                if(add === null) {
                    const message = `L'annonce demandée n'existe pas. Réessayer avec un autre numéro.`
                    res.status(404).json({message, data:error})
                }
                const message = `L'annonce ${add.title} a bien été modifiée.`
                res.json({message, data: add})
            })
        })
        .catch(error => {
            if(error instanceof ValidationError){
                return res.status(400).json({message: error.message, data:error })
            }
            const message = `L'annonce n'a pas pu être modifiée. Réessayer dans quelques instants.`
            res.status(500).json({message, data:error})
        })
    })
}