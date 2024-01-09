const express = require("express");
const { createcompany } = require("../Controller/companyController");
const { companylist } = require("../Controller/companyController");
const { upload } = require("../helper/multer");
const { singleCompany1 } = require("../Controller/companyController");
const { deleteCompany } = require("../Controller/companyController");
const { verifyToken } = require("../Middlerware/JWTverify");
const { searchCompany } = require("../Controller/companyController");
// const { updateCompany } = require('../Controller/companyController');

const companyRoutes = express.Router();

companyRoutes.post("/", upload.single("company_logo"), createcompany);

// companyRoutes.put("/update/:id", updateCompany);

companyRoutes.get("/list", companylist);

companyRoutes.get("/singleCompany/:id", singleCompany1);

companyRoutes.delete("/Dcompany/:id", verifyToken, deleteCompany);
companyRoutes.get("/Search", searchCompany);

module.exports = { companyRoutes };
