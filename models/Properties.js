import { DataTypes } from "sequelize";
import Owners from '../models/Owners.js' // Para criar um relacionamento , preciso importar a tabela a ser relacionada.
import db from '../db/conn.js'
const Properties = db.define('Properties', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    availability: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },

})
Properties.belongsTo(Owners)// Necessário para gerar um campo dentro da tabela onde será citado o relacionamento

export default Properties;