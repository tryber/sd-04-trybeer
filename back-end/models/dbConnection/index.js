const mysqlx = require('@mysql/xdevapi');
require('dotenv/config');

const config = {
  user: process.env.DB_NAME,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: 33060,
  socketPath: '/var/run/mysqld/mysqld.sock',
};

let schema;
const connection = () =>
  schema
    ? Promise.resolve(schema)
    : mysqlx
      .getSession(config)
      .then((session) => {
        schema = session.getSchema('trybeer');
        return schema;
      })
      .catch(() => {
        process.exit(1);
      });

module.exports = { connection };
