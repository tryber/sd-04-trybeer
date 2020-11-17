const express = require('express');
const cors = require('cors');

const userRouter = require('./routers/userRouters');
const productRouter = require('./routers/productRouters');

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());
app.use('/images', express.static('images'));
app.use('/login', userRouter);
app.use('/products', productRouter);

app.listen(port, () => console.log('API rodando na porta 3001!'));
