const express = require('express')
const { addRatting, updateReview, deleteReview } = require('../Controller/ratingController')
const ratingRoutes = express.Router()

ratingRoutes.post('/addRatting',addRatting)
ratingRoutes.put('/updateRatting',updateReview)
ratingRoutes.delete('/deletereview',deleteReview)


module.exports= {ratingRoutes}