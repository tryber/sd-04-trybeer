const { Router } = require('express');
const { userController } = require('../controllers');

const userRouter = Router();

userRouter.post('/', userController.createUserController);

module.exports = userRouter;
