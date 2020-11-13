const { connection } = require('./connection');

// essa função não é genérica podemos move-la para o userModel
const findUserBy = async (info, fieldSearch) => connection()
  .then((db) => db
    .getTable('users')
    .select([])
    .where(`${fieldSearch} = :param`)
    .bind('param', info)
    .execute())
  .then((result) => result.fetchOne())
  .then((user) => {
    if (!user) return null;
    const [ id, name, email, password, role ] = user;
    return {
      id,
      name,
      email,
      password,
      role,
    };
  });

const getAll = async (selection, table) => connection()
  .then((db) => db
    .getTable(table)
    .select(selection)
    .execute()
    .then((result) => {
      const info = result.fetchAll();
      if (!info) return null;
      const infoObjects = info.reduce((acc1,curr1) => {
        const object = curr1.reduce((acc, curr, i) => {
            acc[ selection[ i ] ] = curr;
            return acc;
          }, {});
        acc1[object.name] = object;
        return acc1;
      },{} )
      
      // info.map((arr) => arr.reduce((acc, curr, i) => {
      //   acc[ selection[ i ] ] = curr;
      //   return acc;
      // }, {}));
      return infoObjects;
    }));

module.exports = { findUserBy, getAll };
