const { Pool, Client } = require('pg');

const pool = new Pool({
    user: 'zwjznreyjddruj',
    host: 'ec2-107-20-173-2.compute-1.amazonaws.com',
    database: 'd8m54tgh9306o5',
    password: '9f800949fd17f794ce43cc41a3eb8d718d18cfe0fdb4a5b91524e2edbdb36cdc',
    port: 5432,
  })

  module.exports = pool;