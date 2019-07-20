const { Pool, Client } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'RestaurantDB',
    password: '123',
    port: 5432,
  })

  module.exports = pool;