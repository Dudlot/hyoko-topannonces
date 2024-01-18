const { Add } = require("../../db/sequelize")

module.exports = (app => {
    app.delete('/api/adds/:id', (req, res) => {
        Add.findByPK(req.params.id).then(add => {
            if(add === null) {
                const message = `L'annonce demandé n'existe pas. Réessayer avec un autre identifiant`;
                return res.status(404).jsons({message})
            }
            const addDeleted = add;
            Add.destoy({
                where: { id: add.id }
            })
            .then(_ => {
                const message = `L'annonce avec l'identifiant n*${addDeleted.id} a bien été supprimée.`
                res.json({message, data: addDeleted})
            })
        })
        .catch(error => {
            const message = `L'annonce n'a pas pu être supprimée. Réessayer dans quelques instants.`
            res.status(500).json({message, data:error})
        })
    })
})