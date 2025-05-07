const { DataTypes } = require("sequelize")
const sequelize = require("../../../config/configDB")

const Curso = sequelize.define(
    'Curso',
    {
        cod_curso: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

module.exports = Curso