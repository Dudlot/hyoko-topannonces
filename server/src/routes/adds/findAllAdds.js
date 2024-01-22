const { Add } = require("../../db/sequelize")
const { Op } = require('sequelize')

module.exports = (app) => {
    app.get('/api/adds', (req, res) => {
        if(req.query.name) {
            const name = req.query.name // Indique à express que l'on souhaite extraire le paramètre name de l'URL

            if(name.length < 3) {
                const message = `Le terme de recherche doit contenir au moins 3 caractères.`
                return res.status(400).json({message})
            }
            
            return Add.findAndCountAll({ 
                where: { 
                    name: { // 'name' est la propriété du modèle Add
                        [Op.like]: `%${name}%` // 'name' est le critère de recherche
                    } 
                },
                order: ['createdAt', 'DESC'],
                limit: 5
            })
            .then(({count, rows}) => {
                const message =`Il y a ${count} annonces qui correspondent au terme de recherche ${name}.`
                res.json({ message, data: rows })
            })
        } else {
            Add.findAll({  order: ['createdAt', 'DESC'] })
            .then(adds => {
                const message = 'La liste des annonces a bien été récupérée.'
                res.json({message, data: adds})
            })
            .catch(error => {
                const message = `La liste des annonces n'a pas été récupérée. Réessayer dans quelques instants.`
                res.status(500).json({message, data:error})
            })
        }
    })
}