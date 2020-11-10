const mysqlx = require('@mysql/xdevapi');
require('dotenv/config');

const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  port: 33060,
  socketPath: '/var/run/mysqld/mysqld.sock',
};

let schema;
async function connection() {
  return schema
    ? Promise.resolve(schema)
    : mysqlx
      .getSession(config)
      .then((session) => {
        schema = session.getSchema('Trybeer');
        return schema;
      })
      .catch(() => {
        process.exit(1);
      });
}

module.exports = { connection };
