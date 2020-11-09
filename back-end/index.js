const express = require('express');
const userRouter = require('./routers/userRouters');

const app = express();
const port = 3001;

app.use(express.json());

app.use('/login', userRouter);

app.listen(port, () => console.log(`API rodando na porta 3001!`));
