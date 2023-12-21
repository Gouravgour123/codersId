const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/naaame")
.then(()=> console.log("mongoose is connected")).catch(()=>{console.log("not connected")});
