const express = require('express');

const router = express.Router();

const UserModel = require('../models/UserModel');

router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    if (!name || !email || !password) return res.status(400).json({ message: 'Invalid entries' });

    const user = await UserModel.registerUser(name, email, password, role);

    res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ message: 'Something gone wrong...' });
  }
});
