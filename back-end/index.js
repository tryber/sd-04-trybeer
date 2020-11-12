const express = require('express');
const cors = require('cors');
const userRouter = require('./routers/userRouters');
const profileRouter = require('./routers/profileRouter');

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

app.use('/login', userRouter);

app.use('/profile', profileRouter);

app.listen(port, () => console.log('API rodando na porta 3001!'));
