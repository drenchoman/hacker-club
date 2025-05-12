const { Pool } = require('pg');

const { PGHOST, PGUSER, PGDATABASE, PGPASSWORD, PGPORT } =
  process.env;

module.exports = new Pool({
  host: PGHOST,
  user: PGUSER,
  database: PGDATABASE,
  password: PGPASSWORD,
  port: PGPORT,
});
