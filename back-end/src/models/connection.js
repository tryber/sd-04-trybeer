const mysql = require('@mysql/xdevapi');
require('dotenv/config');

const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  port: 33060,
  socketPath: '/var/run/mysqld/mysqld.sock',
};

let schema;

const connection = () => (schema
  ? Promise.resolve(schema)
  : mysql
    .getSession(config)
    .then((session) => {
      schema = session.getSchema('Trybeer');
      return schema;
    })
    .catch((_err) => process.exit(1)));

module.exports = { connection };
