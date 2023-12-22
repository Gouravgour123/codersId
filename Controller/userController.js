const { userModel, userModel1 } = require("../Models/userModels")

// const Createuser1 =async (req,res)=>{
//     console.log("running")
//     let newuser = await userModel1.create(req.body)
//     if(newuser){

//         res.send("rrrrrr")
//     }
//     res.send(newuser)
// }

const Createuser1=async(req, res)=>{

    let user = await userModel1.findOne({email:req.body.email})
    if(user){
        return res.status(409).send({success: false, message:" Email is already exists"})

    }
    console.log(req.body)
     let newuser = await userModel1.create(req.body)
     res.status(201).send({success: true, message:" registered  is succefully",data:newuser})
    }


     let login = async(req,res)=>{

        let {email,password} = req.body;

        let user = await userModel1.findOne({email:email})
        if(!user){ return res.status(409).send({success:false,message:"Email not exit"})}
        if(password != user.password){return res.status(409).send({success:false,message:"wrong password"})}
        res.status(200).send({success:true,message:'Login Successfully',data:user})
     }
    //  console.log(data)


module.exports = {Createuser1,login}