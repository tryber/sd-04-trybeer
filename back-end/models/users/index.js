const { connection } = require("../dbConnection");

const getAll = async () =>
  connection()
    .then((db) => db.getTable("users").select([]).execute())
    .then((results) => results.fetchAll())
    .then((users) =>
      users.map(([id, name, email, password, role]) => ({
        id,
        name,
        email,
        password,
        role,
      }))
    );

const getById = async (id) =>
  connection()
    .then((db) =>
      db.getTable("users").select([]).where("id = :id").bind("id", id).execute()
    )
    .then((results) => results.fetchAll())
    .then((users) =>
      users.map(([id, name, email, password, role]) => ({
        id,
        name,
        email,
        password,
        role,
      }))
    );

const getByEmail = async (email) =>
  connection()
    .then((db) => db.getTable("users"))
    .select([])
    .where("email = :email")
    .bind("email", email)
    .execute()
    .then((results) => results.fetchAll())
    .then((users) =>
      users.map(([id, name, email, password, role]) => ({
        id,
        name,
        email,
        password,
        role,
      }))
    );

module.exports = { getAll, getById, getByEmail };
