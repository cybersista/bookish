const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bookish',
  password: '10052000',
  port: 5432,
});

module.exports = pool;