const express = require('express');
const usersModel = require('../models/usersModel');

const router = express.Router();

router.get('/', async (req, res) => {
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

router.post('/', async (req, res) => {
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

router.put('/', async (req, res) => {
  try {
    const { name, email } = req.body;
    await usersModel.editUser(name, email);
    return res.status(200).json({ message: 'updated' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
