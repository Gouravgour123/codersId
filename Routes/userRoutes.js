const express = require('express');
const { registration, login, resetPassword, forgotPassword } = require('../Controller/userController.js');
const { upload } = require('../helper/multer.js');
const { verifyToken } = require('../Middlerware/JWTverify.js');
const userRouter = express.Router();
// const multer = require('multer');



userRouter.post('/registration',upload.single("profilepic"), registration);
userRouter.post('/login', login);
userRouter.post('/forgot_password', forgotPassword);
userRouter.post('/reset_password',verifyToken, resetPassword);


module.exports = {userRouter}