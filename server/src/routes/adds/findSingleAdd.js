const { Add } = require("../../db/sequelize")

module.exports = (app) => {
    app.get('/api/adds/:id', (req, res) => {
        Add.findByPK(req.params.id)
            .then(add => {
                const message = 'Une annonce a bien été trouvée.'
                res.json({message, data: add})
            })
    })
}