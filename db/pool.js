const { Pool } = require('pg');

const { DBURL } = process.env;

const connectionString = DBURL;

module.exports = new Pool({
  connectionString,
});
