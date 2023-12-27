const express = require('express');
const { createcompany } = require('../Controller/companyController');
const { companylist } = require('../Controller/companyController');
// const { createcompany } = require('../Controller/companyController');
// const { companylist } = require('../Controller/companyController.js');
const companyRoutes = express.Router();
const companyList = express.Router();


companyRoutes.post("/", createcompany)
companyRoutes.get("/list", companylist)

module.exports = {companyRoutes}