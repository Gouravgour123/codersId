const { default: mongoose } = require("mongoose");

const reviewSchema = new mongoose.Schema({
    subject:{
        type:String,
        require:true,
    },
    review:{
        type:String,
        require:true,
       
    },
    rating:{
        type:Number,
        require:true,
    },
    isActive:{
        type:Boolean,
        require:true,
    },
    company_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"companyModel",
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userModel",
    },
},
  {timestamps:true}
);
let reviewModel =new mongoose.model("reviewModel", reviewSchema)
module.exports= {reviewModel}