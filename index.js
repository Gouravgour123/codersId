const express = require('express');
// const os = require('os')
require('./Dbconnection/connection')
const { userRouter } = require('./Routes/userRoutes');
const { companyRoutes } = require('./Routes/companyRoutes');
const { ratingRoutes } = require('./Routes/RatingRout');
require('dotenv').config();
const app = express();

// let PORT = 4000;


// console.log(os.arch())
// console.log(os.cpus())
// console.log(os.hostname())
// console.log(os.release())
// console.log(os.version())




app.use(express.json());
app.use(express.urlencoded({ extended: false}));


  
app.use('/user',userRouter)
app.use('/company',companyRoutes)
// app.use('/companyList',companylist)
app.use('/review',ratingRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`server is running at ${process.env.PORT}`);
})