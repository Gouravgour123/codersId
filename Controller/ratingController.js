// const { reviewModel } = require("../Models/reviewModel");

const { reviewModel } = require("../Models/reviewModel")

const addRatting = async(req,res)=>{
   console.log(req.body)

   let newRating = await reviewModel.create(req.body)
   res.status(201).send({success:"Raview created",data:newRating})
}
module.exports = {addRatting}