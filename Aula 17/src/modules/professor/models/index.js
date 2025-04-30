const { DataTypes } = require('sequelize');
const sequelize = require("../../../config/configDB")

const Professor = sequelize.define("Professor", {
    matricula: {
        type: DataTypes.STRING(6),
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(60),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(70),
        allowNull: true,
        unique: true,
        validate: {
            isEmail: {
                msg: 'Forne um e-mail valido!'
            },
            len: {
                args: [5, 70],
                msg: 'O e-mail deve ter no minimo 5 caracteres'
            }
        }
    },
    senha: {
        type: DataTypes.STRING(13),
        allowNull: true,
        validate: {
            len: {
                args: [8,13],
                msg: 'A senha deve ter de 8 a 13 caracteres'
            },
            is: {
                args: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{13}$/,
                msg: 'A senha deve ter pelo menos uma letra maiúscula, um número, um caractere especial e totalizar 13 caracteres!'
              }
        }
    }
})