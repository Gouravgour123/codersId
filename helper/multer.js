const express = require('express');
const multer = require('multer');


const storage = multer.diskStorage({
    
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    let datetimestamp = Date.now()+Math.random()
      cb(null, datetimestamp+file.originalname);
    },
  });


  const upload = multer({ storage: storage , limits:{fileSize:10 *1024 *100}});
  

  module.exports = {upload}