const express = require('express');
const { registration, login } = require('../Controller/userController.js');
const { upload } = require('../helper/multer.js');
const userRouter = express.Router();
// const multer = require('multer');



userRouter.post('/registration',upload.single("profilepic"), registration);
userRouter.post('/login', login);

module.exports = {userRouter}