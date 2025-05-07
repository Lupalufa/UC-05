const { DataTypes } = require('sequelize')
const sequelize = require("../../../config/configDB")

const TurmaModels = sequelize.define(
    'Turma',
    {
        cod_turma: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            validate: {
                isNumeric: {
                    args: [/^\d{9}$/],
                    msg: "O campo deve ter exatamente 9 dígitos numéricos"
                }
            }
        },
        cod_curso: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'curso',
                key: 'cod_curso'
            }
        },
        turno: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn:{
                    args:['matutino','vespertino','noturno']
                }
            }
        }
    },
    {
        tableName: 'turma',
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em'
    }
);

module.exports = TurmaModels