module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Add', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {msg: "Le titre est une information requise"},
                notEmpty: {msg: "Le titre ne peut pas être vide"}
            }
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {msg: "Une descritpion du produit/service est requise"},
                notEmpty: {msg: "Une descritpion ne peut pas être vide"}
            }
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {msg: "Une image minimum est requise"},
                isUrl: {msg: "L'image doit être sous forme d'URL"}
            }
        },
        price: {
            type: DataTypes.DECIMAL(10, 2), // Un nombre décimal avec deux chiffres après la virgule
            allowNull: false,
            validate: {
                isDecimal: {msg: "Utilisez uniquement un nombre sous la forme 00.00 pour le prix."},
                min: {
                    args: [0],
                    msg: "Le prix doit être supérieur à 0.-"
                },
                max: {
                    args: [99999],
                    msg: "Le prix doit être inférieur à 100 000.-"
                },
                notNull: {msg: "Le prix est une information requise"}
            }
        },
    } , {
        tableName: 'Adds',
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
}