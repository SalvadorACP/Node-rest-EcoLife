const knex = require('knex');
const db = knex({
    client: 'mysql2',
    connection:{
        host: 'mysql',
        user: 'user_restaurante',
        password: '54321',
        database: 'restaurante'
    }
});
module.exports = db;
