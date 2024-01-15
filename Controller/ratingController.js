const { companyModel } = require("../Models/companyModel")
const { reviewModel } = require("../Models/reviewModel")

const addRatting = async(req,res)=>{
   // console.log(req.body)
   let findcompany = await companyModel.findOne({_id:req.body.company_id})
   if(!findcompany){return res.status(404).send({success:false, message:'Company not found'})}
   let newRating = await reviewModel.create(req.body)
   res.status(201).send({success:true,message:"Raview created",data:newRating})
}



const updateReview = async(req,res)=>{

   try{
      let review = await reviewModel.findOne({ _id:req.params.id })
      if(req.userID != review.user_id){return res.status(400).send({success:false,message:"not authorize"})}
      let updatedReview = await reviewModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
      if(!updatedReview)return res.status(400).send({success:false,message:"Couldnot update"})
      res.status(200).send({success:true,message:"Review updated",data: updatedReview})
   } 
   catch{
    res.status(500).send({success:false,message:"server Crashed",error:error.message})
   }
}


const deleteReview = async(req,res)=>{
try{
   
   let review = await reviewModel.findOne({_id:req.param.id});
   if(req.userID != review.user_id){return res.status(400).send({success:false,message:"not Authorized"})}
   await reviewModel.findByIdAndDelete(req.param.id)
   res.status(200).send({success:true,message:"Review deleted"})
}
catch{

   res.status(500).send({success:false,message:"Server Creashed",error:error.message})
}
}


module.exports = {addRatting,updateReview,deleteReview}