const express = require('express');
const { Createuser1 } = require('../Controller/userController');
const userRouter =express.Router();


userRouter.get('/', (req,res)=>{
    res.send("hello")
})

userRouter.post('/', Createuser1)

module.exports = {userRouter}