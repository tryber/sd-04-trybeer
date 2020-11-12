const express = require("express");
const bodyParser = require("body-parser");
const { login } = require("./controllers/login");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/login", login);

app.listen(port, () => console.log(`Listening on port ${port}`));
