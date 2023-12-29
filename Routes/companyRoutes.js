const express = require('express');
const { createcompany } = require('../Controller/companyController');
const { companylist } = require('../Controller/companyController');
const { singleCompany } = require('../Controller/companyController');
const { upload } = require('../helper/multer');
// const { createcompany } = require('../Controller/companyController');
// const { companylist } = require('../Controller/companyController.js');
const companyRoutes = express.Router();
const companyList = express.Router();


companyRoutes.post("/",upload.single("company_logo"), createcompany)
companyRoutes.get("/list", companylist)
companyRoutes.get("/singleCompany/:id", singleCompany)

module.exports = {companyRoutes}