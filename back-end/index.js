require('dotenv/config');
const express = require('express');

const app = express();
const port = process.env.PORT;

const router = require('./routes');

app.use(express.urlencoded({ extended: true }));

app.get('/', (_, res) => res.send('ok'));

app.use(router);

app.listen(port, () => console.log(`Running on port ${port}...`));
