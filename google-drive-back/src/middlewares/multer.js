'use strict'

const multer = require("multer");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    const extension = file.originalname.split('.').pop();
    cb(null, `${Date.now()}.${extension}`)
  }
})

const uploadMultiple = multer({
  storage: storage,
})

exports.upload = multer({storage: storage})


