const { Router } = require('express');
const userController = require('./controllers/userController');

const routes = Router();

routes.post('/login', userController.userLogin);
<<<<<<< HEAD
routes.post('/register', userController.registerUserController);
=======

>>>>>>> 4a5923e906e3f81c44bd157ce09b8915fa31b37d
routes.get('/profile', userController.getUserByEmail);

module.exports = routes;
