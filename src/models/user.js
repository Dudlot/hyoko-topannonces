module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {msg: 'L\'adresse-mail est déjà prise.'},
            validate: {
                isEmail: {msg: 'L\'adresse-mail est invalide.'}
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}