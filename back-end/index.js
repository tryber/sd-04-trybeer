require('dotenv/config');
const express = require('express');
const path = require('path');

const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(cors());

app.get('/', (_, res) => res.send('ok'));

app.use(routes);

app.listen(port, () => console.log(`Running on port ${port}...`));
