'use strict'

const mongoose = require('mongoose');
const fileSchema = mongoose.Schema({
  img: {
    data: Buffer, 
    contentType: String
  }  
})

module.exports = mongoose.model('File', fileSchema)
