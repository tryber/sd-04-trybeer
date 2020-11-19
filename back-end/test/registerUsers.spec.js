const frisby = require('frisby');
const joi = require('joi');
// const connection = require('../models/connection');

// const dropTable = async (session, table) => {
//   // console.log(table)
//   return await session.sql(`DROP TABLE IF EXISTS ${table}`).execute();
// }

// const popularTable = async (session, table) => {
//   return await session.sql(table).execute();
// }

const schemaRegisterUsers = joi.object({
  name: joi.string().min(12).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  role: joi.string().valid('administrator', 'client').required(),
});

const URL_REGISTER_USERS_ENDPOINT = 'http://localhost:3001/register';

describe('Test /register endpoint', () => {
  it.skip('1 - It will be validated that it is possible to register successfully.', async () => {
    const response = await frisby
      .post(URL_REGISTER_USERS_ENDPOINT, {
        name: 'testregister',
        email: 'testregister@test.com',
        password: 'test123',
        role: 'client',
      })
      .expect('status', 200);
    const { body } = response;
    const responseJson = JSON.parse(body);

    expect(responseJson).toHaveProperty('token');
    expect(responseJson).toHaveProperty('data');
  });

  it('2 - It will be validated that it is not possible to register with a name with special characters.', async () => {
    const response = await frisby
      .post(URL_REGISTER_USERS_ENDPOINT, {
        name: 'nameTest$',
      })
      .expect('status', 500);
    const { name } = response;
    const { ValidationError: error } = schemaRegisterUsers.validate({ name });

    expect(name).toBe(error);
  });

  // it('3 - It will be validated that it is not possible to register with a name with less than 12 letters.', async () => {});

  // it('4 - It will be validated that it is not possible to register with a name with numbers.', async () => {});

  // it('5 - It will be validated that it is not possible to login with an invalid email.', async () => {});

  // it('6 - It will be validated that it is not possible to login with an existing email.', async () => {});

  // it('7 - It will be validated that it is not possible to login with a blank password.', async () => {});

  // it('8 - It will be validated that it is not possible to login with a password with less than 6 characters.', async () => {});
});
