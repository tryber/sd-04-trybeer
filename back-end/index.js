require('dotenv/config');
const express = require('express');

const app = express();
const port = process.env.PORT;

// const userController = require('./controller/UserController');

app.use(express.urlencoded({ extended: true }));

app.get('/', (_, res) => res.send('ok'));

app.listen(port, () => console.log(`Running on port ${port}...`));
