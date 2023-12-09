const fs = require('fs');
const knex = require('knex');

const connectToMysql = async function(){
    const dbPassword = await fs.promises.readFile('/run/secrets/db_password');
    const db = knex({
        client: 'mysql2',
        connection:{
            host: 'mysql',
            user: 'user_SACP',
            password: dbPassword,
            database: 'EcoLife'
        }
    });
    return db;
};
module.exports = {connectToMysql};
