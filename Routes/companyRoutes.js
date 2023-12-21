const express = require('express');
const { createcompany } = require('../Controller/companyController');
const { companylist } = require('../Controller/companyController');
const companyRoutes = express.Router();
const companyList = express.Router();


companyRoutes.post("/",createcompany)
companyList.get("/",companylist)

module.exports = {companyRoutes}