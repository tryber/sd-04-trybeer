const { Router } = require('express');
const userController = require('./controllers/userController');

const routes = Router();

routes.post('/login', userController.userLogin);

routes.get('/profile/:id', userController.getUserByEmail);
routes.put('/profile', userController.saveEditController);

module.exports = routes;
