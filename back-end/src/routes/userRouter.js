const { Router } = require('express');
const { userController } = require('../controllers');

const userRouter = Router();

userRouter.post('/', userController.createUserController);

userRouter.get('/', userController.showAllEmails);

module.exports = userRouter;
