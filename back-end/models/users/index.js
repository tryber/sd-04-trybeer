const connection = require('../dbConnection');

const getAll = () => connection()
  .then((db) => db.getTable('users')
    .select()
    .execute())
  .then((results) => results.fetchAll())
  .then((users) => users.map(([id, name, email, password, role]) => ({
    id,
    name,
    email,
    password,
    role,
  })))
  .catch((e) => e);

const getById = (UserId) => connection()
  .then((db) => db.getTable('users')
    .select()
    .where('id = :id')
    .bind('id', UserId)
    .execute())
  .then((results) => results.fetchOne())
  .then(([id, name, email, password, role]) => ({ id, name, email, password, role }))
  .catch((e) => e);

const getByEmail = (UserEmail) => connection()
  .then((db) => db.getTable('users')
    .select()
    .where('email = :email')
    .bind('email', UserEmail)
    .execute())
  .then((results) => results.fetchOne())
  .then(([id, name, email, password, role]) => ({ id, name, email, password, role }))
  .catch((e) => e);

const updateUser = (id, name) => {
  const table = connection().then((db) => db.getTable('users'));

  table.update()
    .set('name', name)
    .where('id = :id')
    .bind('id', id)
    .execute();
};

// Adiciona ou registra usuário no banco de dados
const add = (name, email, password, role) => connection()
  .then((db) => db.getTable('users')
    .insert(['name', 'email', 'password', 'role'])
    .values(name, email, password, role)
    .execute())
  .catch((e) => e);

module.exports = { getAll, getById, getByEmail, add, updateUser };

