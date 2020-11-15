require('dotenv/config');
const express = require('express');
const cors = require('cors');
const router = require('./routes');

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(router);
app.use('/images', express.static('images'));

app.listen(port, () => console.log(`Running on port ${port}...`));
