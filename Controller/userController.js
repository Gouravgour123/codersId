const { userModel1 } = require("../Models/userModels");
// const bcrypt = require("bcrypt");
const path = require("path");
const { hashPass, comparePassword } = require("../helper/bcrypt");

const registration = async (req, res) => {
  // console.log(req.file)
  let { email } = req.body;

  let fileLocation = path.join(
    __dirname,
    `../${req.file.destination + req.file.filename}`
  );

  let user = await userModel1.findOne({ email });
  if (user) {
    return res
      .status(409)
      .send({ success: false, message: " Email is already exists" });
   }

  // let saltRounds = 10;
  // let hasspassword = await bcrypt.hash(req.body.password, saltRounds);
 let hasspassword = await hashPass(req.body.password)

  let newuser = await userModel1.create({
    ...req.body,
    password: hasspassword,
    profilepic: fileLocation,
  });
  console.log(newuser);

  res.status(201).send({
    success: true,
    message: " registered  is succefully",
    data: newuser,
  });
};
const login = async (req, res) => {
  let { email, password } = req.body;

  let user = await userModel1.findOne({ email: email });
  // console.log(user)
  if (!user) {
    return res.status(409).send({ success: false, message: "Email not exit" });
  }
  const matchedPassword = await comparePassword(password, user.password);
  if (!matchedPassword) {
    return res.status(409).send({ success: false, message: "wrong password" });
  }
  res
    .status(200)
    .send({ success: true, message: "Login Successfully", data: user });
};

module.exports = { registration, login };
 