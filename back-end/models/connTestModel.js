// const conn = require('./connection');

// ==========================================================================
// Função usada só para teste de conexão local, só descomentem para testar!!!
// ==========================================================================

// const readByEmailTest = async (userEmail) => {
//   const db = await conn();
//   const table = await db.getTable('users');
//   const user = await table
//     .select(['id', 'name', 'email', 'password', 'role'])
//     .where('email = :email')
//     .bind('email', userEmail)
//     .execute();

//   return user
//     .fetchAll()
//     .map(([id, name, email, password, role]) => ({ id, name, email, password, role }))[0];
// };

// ======================================================================
// Função IIFE usada para retornar o resultado do banco assim q o arquivo
// é executado, para usar, descomentem, e pelo terminal entrem na pasta
// back-end e executem o comando 'node models/connTestModel.js'
// ======================================================================

// (async () => console.log(await readByEmailTest('user@test.com')))();
