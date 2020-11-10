const { Router } = require('express');
const userController = require('./controllers/userController');

const routes = Router();

routes.post('/login', userController.userLogin);

module.exports = routes;
