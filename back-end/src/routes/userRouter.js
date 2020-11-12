const express = require('express');
const { userController } = require('../controllers');

const userRouter = express.Router();

userRouter.put('/update', userController.updateUserController);

module.exports = userRouter;
