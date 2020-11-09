require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (_req, res) => {
  res.status(200).send('Trybeer');
});

app.listen(3001, () => console.log('Listening on 3001'));
