import { Sequelize } from "sequelize";

const db = new Sequelize('database', 'root', '1996', {
    host: 'localhost',
    dialect: 'mysql'
});


export default db