const { connection } = require('../dbConnection');

const getAll = async () => connection().then((db) => db.getTable('users').select([])
  .execute())
  .then((results) => results.fetchAll())
  .then((users) => users.map(([id, name, email, password, role]) => ({
    id,
    name,
    email,
    password,
    role,
  })));

const getById = async (UserId) => connection()
  .then((db) => db.getTable('users').select([])
    .where('id = :id')
    .bind('id', UserId)
    .execute())
  .then((results) => results.fetchOne())
  .then(([id, name, email, password, role]) => ({ id, name, email, password, role }));

const getByEmail = async (UserEmail) => connection()
  .then((db) => db.getTable('users'))
  .select([])
  .where('email = :email')
  .bind('email', UserEmail)
  .execute()
  .then((results) => results.fetchOne())
  .then(([id, name, email, password, role]) => ({ id, name, email, password, role }));

module.exports = { getAll, getById, getByEmail };
