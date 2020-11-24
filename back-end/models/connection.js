const mysqlx = require('@mysql/xdevapi');
require('dotenv').config();

const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  port: 33060,
  socketPath: '/var/run/mysqld/mysqld.sock',
  schema: 'Trybeer',
};

let schema;

const simpleConnection = () => {
  if (schema) return Promise.resolve(schema);
  return mysqlx.getSession(config).catch((err) => {
    console.error(err);
    process.exit(1);
  });
};

const connection = async () => {
  if (schema) return Promise.resolve(schema);
  try {
    const session = await mysqlx.getSession(config);
    schema = await session.getSchema('Trybeer');
    return schema;
  } catch (error) {
    return process.exit(1);
  }
};

module.exports = { connection, simpleConnection };
