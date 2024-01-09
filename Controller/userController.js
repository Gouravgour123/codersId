const { userModel1 } = require("../Models/userModels");
const path = require("path");
const jwt = require('jsonwebtoken');
const validator = require('validator')
const nodemailer = require('nodemailer')
const { hashPass, comparePassword } = require("../helper/bcrypt");
require('dotenv').config()

//-------Register-------------------
const registration = async (req, res) => {
  try {
    // console.log(req.body,req.file)
    let { email,password } = req.body
    if(!validator.isEmail(email)){return res.status(400).send({success:false,message:"Email Validation Failed"})}
    let fileLocation = path.join(__dirname,`../${req.file.destination + req.file.filename}`)
    let user = await userModel1.findOne({ email })
    if (user) {
      return res.status(409).send({ success: false, message: " Email is already exists" })}
   let hasspassword = await hashPass(password)
    let newuser = await userModel1.create({...req.body,password: hasspassword,profilepic: fileLocation})
    // console.log(newuser);
    res.status(201).send({success: true,message: " registered  is succefully",data: newuser})
  } catch (error) {
    console.log(error.message)
  }
}

//----------Login-------------------
const login = async (req, res) => {
  let { email, password } = req.body

  let user = await userModel1.findOne({ email: email });

  if (!user) {
    return res.status(409).send({ success: false, message: "Email not exit" });
  }
  const matchedPassword = await comparePassword(password, user.password);
  if (!matchedPassword) {
    return res.status(409).send({ success: false, message: "wrong password" });
  }
let token = jwt.sign({user:user},process.env.JWTKEY)
await res.setHeader("token",token)

  res.status(200).send({ success: true, message: "Login Successfully", data: user, token:token })}



  
  //----------------forgot password --------------------
  const forgotPassword = async (req,res)=>{
    try{
      const {email} = req.body;
      const user = await userModel1.findOne(email)
      if(!user){
        return res.status(404).send({success:false,message:"user is not found"})
     
  }
  const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
      user:"sp8316886@gmail.com",
      pass:"xisr tvmf xeyz rswx",
    }
  });
  
  const mailOptions = {
    from:"sp8316886@gmail.com",
    to: req.body.email,
    subject: "hellow its me",
    text: "abcdefgh",
  };
  // console.log("hello")
  
  transporter.sendMail(mailOptions, async(err)=>{
    if(err){
      res.status(404).send({success:false,message:err.message})
    }
    else{
    res.status(200).send({success:true,message:"Email send"})
    
  }
})

} catch (error) {
  console.error(error.message);
  res.status(500).send({ success: false, message: "Internal Server Error" });
}
}





//--------------reset password------------------------
const resetPassword = async (req, res) => {

  try{
    let user = await userModel1.findOne({email:req.body.email})
    if(!user){
      return res.status(404).send({success:false,message:"Invalid email"})
    }
    if(req.body.newPassword != req.body.confirmPassword){
      return res.status(404).send({success:false,message:"Password not  matched"})
    }
    let newHashPassword = await hashPass(req.body.newPassword);
    
    let newdataUpdate = new userModel1(user)
     newdataUpdate.password=newHashPassword;
     newdataUpdate.save();
     res.status(201).send({success:true,message:"Reset password succesfully"})

  }
  catch(error){
    res.status(500).send({success:false,message:"server crashed",error:error.message})
  }
}


// const resetPassword = async (req, res) => {
//   try {
//     const { resetToken, newPassword } = req.body;

//     // Verify the reset token
//     const user = await userModel1.findById(decodedToken.userId);
//     if (!user) {
//       return res.status(404).send({ success: false, message: "User not found" });
//     }
//     const decodedToken = jwt.verify(resetToken, process.env.JWTKEY);
//     // Update the user's password
//     const hashedPassword = await hashPass(newPassword);
//     user.password = hashedPassword;
//     user.resetToken = null; // clear the reset token
//     await user.save();

//     res.status(200).send({ success: true, message: "Password reset successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(400).send({ success: false, message: "Invalid or expired token" });
//   }
// };


 


// const forgotPassword = async (req,res)={
// try {
  
// } catch (error) {
//   res.status(500).send({success:false,message:""})
// }
// }




module.exports = { registration, login, resetPassword, forgotPassword };
 