const express = require('express');
const { registration, login } = require('../Controller/userController.js');
const userRouter = express.Router();


userRouter.post('/registration', registration);
userRouter.post('/login', login);

module.exports = {userRouter}