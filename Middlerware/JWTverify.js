const jwt = require("jsonwebtoken");
require("dotenv").config();

// const verifyToken = (req, res, next) => {
//   const token = req.header("Authorization");
//   if (!token || !token.startsWith("Bearer ")) {
//     return res.status(401).send("Access denied. Invalid token format.");
//   }
//   const tokenValue = token.split(" ")[1];
//   try {
//     const verified = jwt.verify(tokenValue, 'shhhh');
//     req.user = verified;
//     next();
//   } catch (error) {
//     res.status(400).send("Invalid token.");
//   }
// };

const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");
    if (!token) {
      return res
        .status(400)
        .send({ success: false, message: "token not found" });
    }
    let tokenV = token.split(" ")[1];
    var decoded = jwt.verify(tokenV, process.env.JWTKEY);
    req.user = decoded;
    next();
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: "Crashed", message: error.message });
  }
};

module.exports = { verifyToken };
