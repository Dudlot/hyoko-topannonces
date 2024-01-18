const { Add } = require('../../db/sequelize')
const { ValidationError } = require('sequelize')

module.exports = (app) => {
    app.post('/api/adds', (req, res) => {
        Add.create(req.body)
            .then(add => {
                const message = `L'annonce ${req.body.title} a bien été crée.`
                res.json({message, data: add}) 
            })
            .catch(error => {
                if(error instanceof ValidationError){
                    return res.status(400).json({message: error.message, data:error })
                }
                const message = `L'annonce n'a pas pu être ajoutée. Réessayer dans quelques instants.`
                res.status(500).json({message, data:error})
            })
    })
}