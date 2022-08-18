import Sequelize from "sequelize";

const sequelize = new Sequelize('primeiro_projeto', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
})

try {
    sequelize.authenticate()
    console.log('Conectamos ao Postgres!!!!!');
} catch (error) {
    console.error('Conexão mal sucedida!', error);
}

export default sequelize
