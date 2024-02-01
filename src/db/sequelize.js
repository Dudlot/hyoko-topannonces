const {Sequelize, DataTypes} = require('sequelize')
const bcrypt = require('bcryptjs')
const AddModel = require('../models/add')
const UserModel = require('../models/user')
const adds = require('./mock-adds')

let sequelize
if(process.env.NODE_ENV === 'production') {
	sequelize = new Sequelize( // Instancier Sequelize
		'qaixeeazf3rwdhr2',
		'p290fnqids11b7fv',
		'encwrrqkv6ch0te6',
		{
			host: 'ao9moanwus0rjiex.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
			dialect: 'mariadb',
			dialectOptions: {
				timezone: 'Etc/GMT-2'
			},
			loggin: true
		}
	);
} else {
	sequelize = new Sequelize( // Instancier Sequelize
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
}

const Add = AddModel(sequelize, Sequelize.DataTypes) // Synchroniser la BDD avec le model
const User = UserModel(sequelize, Sequelize.DataTypes)

const initDb = () => {
    return sequelize.sync({ force: true }).then(_ => {
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
				username: 'Dudlot',
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