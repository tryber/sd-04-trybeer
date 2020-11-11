const { connection } = require("./connection");

const findUserBy = async (info, fieldSearch) =>
  connection()
    .then((db) =>
      db
        .getTable("users")
        .select([])
        .where(`${fieldSearch} = :param`)
        .bind("param", info)
        .execute(),
    )
    .then((result) => result.fetchOne())
    .then((info) => {
      if (!info) return null;
      const [id, name, email, password, role] = info;
      return {
        id,
        name,
        email,
        password,
        role,
      };
    });

module.exports = { findUserBy };
