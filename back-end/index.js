require('dotenv/config');
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
// const port = process.env.PORT || 3001;
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.get('/', (_, res) => res.send('ok'));

app.use('/images', express.static('images'));

app.use(routes);

app.listen(port, () => console.log(`Running on port ${port}...`));
