const mysql = require('@mysql/xdevapi');
require('dotenv/config');

const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  port: 33060,
  socketPath: '/var/run/mysqld/mysqld.sock',
  schema: 'Trybeer',
};

let schema;

const connectionJoin = () => {
  if (schema) {
    return Promise.resolve(schema);
  } else {
    schema = mysql.getSession(config).catch((_err) => process.exit(1));
  }
};

module.exports = connectionJoin;
