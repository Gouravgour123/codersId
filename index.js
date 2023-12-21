const express = require('express');
require('./Dbconnection/connection')
const { userRouter } = require('./Routes/routes');
const { companyRoutes } = require('./Routes/companyRoutes');
const { companylist } = require('./Controller/companyController');
const app = express();

let PORT = 4000;

app.use(express.json());

app.use('/gour',userRouter)
app.use('/company',companyRoutes)
app.use('/companyList',companylist)

// app.get('/', (req,res)=>{
//     res.send("hello")
// })

// app.post('/', (req,res)=>{
//     console.log("running")
//     console.log(req.body)
//     res.send("rrrrrr")
// })

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`);
})