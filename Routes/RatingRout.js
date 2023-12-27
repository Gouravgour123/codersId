const express = require('express')
const { addRatting } = require('../Controller/ratingController')
const ratingRoutes = express.Router()

ratingRoutes.post('/addRatting',addRatting)

module.exports= {ratingRoutes}