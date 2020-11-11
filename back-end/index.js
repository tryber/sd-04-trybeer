require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const usersModel = require('./models/usersModel');
const createToken = require('./auth/createJWT');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/login', (_req, res) => {
  res.status(200).send({ project: 'Trybeer' });
});

app.get('/users', async (_req, res) => {
  const users = await usersModel.getUsers();
  res.status(200).json(users);
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const token = createToken({ email, password });
  return res.status(200).json({ token });
});

app.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;

  const user = await usersModel.findUserByEmail(email);

  if (user) {
    return res.status(409).json({ message: 'E-mail already in database.' });
  }

  await usersModel.registerUser(name, email, password, role);
  return res.status(200).json({ message: 'user registered successfully' });
});

app.put('/edit', async (req, res) => {
  const { name, email } = req.body;
  await usersModel.editUser(name, email);
  return res.status(200).json({ message: 'updated' });
});

app.listen(3001, () => console.log('Listening on 3001'));
