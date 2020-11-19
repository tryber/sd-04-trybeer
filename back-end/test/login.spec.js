const frisby = require('frisby');
const joi = require('joi');

const schemaLogin = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

const URL_LOGIN_ENDPOINT = 'http://localhost:3001/login';

describe('Test /login endpoint.', () => {
  it('1 - It will be validated that it is possible to login successfully.', async () => {
    const response = await frisby
      .post(URL_LOGIN_ENDPOINT, {
        email: 'user@test.com',
        password: 'test123',
      })
      .expect('status', 200);
    const { body } = response;
    const responseJson = JSON.parse(body);

    expect(responseJson).toHaveProperty('token');
    expect(responseJson).toHaveProperty('data');
  });

  it('2 - It will be validated that the field "email" is mandatory.', async () => {
    const response = await frisby
      .post(URL_LOGIN_ENDPOINT, {
        email: '',
      })
      .expect('status', 500);
    const { email } = response;
    const { ValidationError: error } = schemaLogin.validate({ email });

    expect(email).toBe(error);
  });

  it('3 - It will be validated that the field "password" is mandatory.', async () => {
    const response = await frisby
      .post(URL_LOGIN_ENDPOINT, {
        password: '',
      })
      .expect('status', 500);
    const { password } = response;
    const { ValidationError: error } = schemaLogin.validate({ password });

    expect(password).toBe(error);
  });

  it('4 - It will be validated that you cannot log in with an invalid email.', async () => {
    const response = await frisby
      .post(URL_LOGIN_ENDPOINT, {
        email: 'usertest.com',
      })
      .expect('status', 500);
    const { email } = response;
    const { ValidationError: error } = schemaLogin.validate({ email });

    expect(email).toBe(error);
  });

  it('5 - It will be validated that the "password" field cannot be less than 6 characters.', async () => {
    const response = await frisby
      .post(URL_LOGIN_ENDPOINT, {
        password: 'test1',
      })
      .expect('status', 500);
    const { password } = response;
    const { ValidationError: error } = schemaLogin.validate({ password });

    expect(password).toBe(error);
  });
});
