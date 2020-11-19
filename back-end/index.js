const express = require('express');
const cors = require('cors');

const userRouter = require('./routers/userRouters');
const profileRouter = require('./routers/profileRouter');
const productRouter = require('./routers/productRouters');
const userController = require('./controllers/userController');
const orderRouter = require('./routers/salesRouters');

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

app.use('/images', express.static('images'));

app.post('/register', userController.userRegister);
app.use('/login', userRouter);
app.use('/products', productRouter);
app.use('/order', orderRouter);

app.use('/profile', profileRouter);

app.listen(port, () => console.log('API rodando na porta 3001!'));
