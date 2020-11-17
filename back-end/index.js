require('dotenv/config');
const express = require('express');

const cors = require('cors');

const app = express();
const port = process.env.PORT;

const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get('/', (_, res) => res.send('ok'));

app.use(routes);

app.listen(port, () => console.log(`Running on port ${port}...`));
