const { Add } = require("../../db/sequelize")

module.exports = (app) => {
    app.get('/api/adds', (req, res) => {
        Add.findAll()
            .then(adds => {
                const message = 'La liste des annonces a bien été récupérée.'
                res.json({message, data: adds})
            })
            .catch(error => {
                const message = `La liste des annonces n'a pas été récupérée. Réessayer dans quelques instants.`
                res.status(500).json({message, data:error})
            })
    })
}