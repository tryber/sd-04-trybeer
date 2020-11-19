require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const usersModel = require('./models/usersModel');
const createToken = require('./auth/createJWT');
const productsModel = require('./models/productsModel');
const salesModel = require('./models/salesModel');
const salesProductsModel = require('./models/salesProductsModel');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/images', express.static('images'));

app.get('/login', (_req, res) => {
  res.status(200).send({ project: 'Trybeer' });
});

app.get('/users', async (req, res) => {
  try {
    const { email } = req.query;

    if (email) {
      const user = await usersModel.findUserByEmail(email);
      return res.status(200).json(user);
    }
    const users = await usersModel.getUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = createToken({ email, password });
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await usersModel.findUserByEmail(email);
    if (user) {
      return res.status(409).json({ message: 'E-mail already in database.' });
    }
    await usersModel.registerUser(name, email, password, role);
    return res.status(200).json({ message: 'user registered successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.put('/edit', async (req, res) => {
  try {
    const { name, email } = req.body;
    await usersModel.editUser(name, email);
    return res.status(200).json({ message: 'updated' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.get('/products', async (_req, res) => {
  try {
    const products = await productsModel.getProducts();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.post('/sales', async (req, res) => {
  try {
    const {
      userId,
      price,
      street,
      houseNumber,
      date,
      status,
      productId,
      quantity,
    } = req.body;
    const order = await salesModel.registerSale(
      userId,
      price,
      street,
      houseNumber,
      date,
      status,
    );

    const saleId = order.getAutoIncrementValue();

    for (let i = 0; i < productId.length; i++) {
      salesProductsModel.registerSalesProducts(
        saleId,
        productId[i],
        quantity[i],
      );
    }

    return res
      .status(200)
      .json({ message: 'dados inseridos nas duas tabelas' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.get('/sales', async (req, res) => {
  try {
    const { userId } = req.query;
    const sales = await salesModel.getSalesByUserId(userId);
    return res.status(200).json(sales);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.get('/sales/all', async (req, res) => {
  try {
    const sales = await salesModel.getAllSales();
    return res.status(200).json(sales);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.get('/details', async (req, res) => {
  try {
    const { saleId } = req.query;
    const orderDetails = await salesProductsModel.getSaleById(saleId);
    return res.status(200).json(orderDetails);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.listen(3001, () => console.log('Listening on 3001'));
