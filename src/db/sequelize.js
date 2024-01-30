const {Sequelize, DataTypes} = require('sequelize')
const AddModel = require('../models/add')
const UserModel = require('../models/user')
const adds = require('./mock-adds')
const bcrypt = require('bcrypt')

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
const User = UserModel(sequelize, Sequelize.DataTypes)

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

		bcrypt.hash('HopeEternal74@', 10) // plus le nombre est grand plus le temps de hachage l'est aussi 
		.then(hash => {
			User.create({
				firstname:'Charlotte',
				lastname: 'Dunand',
				email:'charlotte@hyoko.ch',
				password: hash
			})
		})
		//.then(user => console.log(user.toJSON()))

        console.log('La table "Add" a bien été synchronisée')
	})
}

module.exports = {
    initDb, Add, User
}