const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/gourav")
.then(()=> console.log("mongoose is connected")).catch(()=>{console.log("not connected")});
