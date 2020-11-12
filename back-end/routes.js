const { Router } = require('express');
const userController = require('./controllers/userController');
const checkEmailInDatabase = require('./middlewares/checkEmailInDatabase');
const routes = Router();

routes.post('/login', userController.userLogin);
routes.post('/register', checkEmailInDatabase, userController.registerUserController);
routes.get('/profile', userController.getUserByEmail);

module.exports = routes;
