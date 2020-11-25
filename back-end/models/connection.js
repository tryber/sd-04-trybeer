require('dotenv/config');
const mysqlx = require('@mysql/xdevapi');

const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  port: 33060,
  socketPath: '/var/run/mysqld/mysqld.sock',
};
let schema;

module.exports = async () => {
  try {
    if (schema) return Promise.resolve(schema);

    const session = await mysqlx.getSession(config);

    schema = session.getSchema(Trybeer);

    return schema;
  } catch (_) {
    process.exit(1);
  }
};
