const express = require('express');
require('./Dbconnection/connection')
const { userRouter } = require('./Routes/userRoutes');
const { companyRoutes } = require('./Routes/companyRoutes');
// const { companylist } = require('./Controller/companyController');
const app = express();

let PORT = 4000;

app.use(express.json());

app.use('/user',userRouter)
app.use('/company',companyRoutes)
// app.use('/companyList',companylist)

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`);
})