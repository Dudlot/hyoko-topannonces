const {Sequelize, DataTypes} = require('sequelize')
const AddModel = require('../models/add')
const adds = require('./mock-adds')

const sequelize = new Sequelize( // Instancier Sequelize
	'topannonces',
	'root',
	'root',
	{
		host: 'localhost',
		dialect: 'mysql',
		dialectOptions: {
			socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
		}
	}
);

const Add = AddModel(sequelize, Sequelize.DataTypes) // Synchroniser la BDD avec le model

const initDb = () => {
    return sequelize.sync({force:true}) .then(_ => {
		adds.map(add => {
			Add.create({
				title: add.title,
        		content: add.content,
        		picture: add.picture,
        		price: add.price,
			}).then(add => console.log(add.toJSON()))
		})

        console.log('La table "Add" a bien été synchronisée')
	})
}

module.exports = {
    initDb, Add
}