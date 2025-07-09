const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'testDB',
    password: 'azamat361',
    port: 5432,
})

module.exports = pool