'use strict'

const multer = require("multer");
const fs = require('fs');

const path = './uploads'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    const extension = file.originalname.split('.').pop();
    cb(null, file.originalname)
  }
})

const uploadMultiple = multer({
  storage: storage,
})

exports.upload = multer({storage: storage})


