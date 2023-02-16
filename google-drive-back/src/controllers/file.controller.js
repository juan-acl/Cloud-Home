'use strict'

const File = require('../models/files.model');
const express = require('express')
const {upload} = require('../middlewares/multer');
const fs = require('fs');
const { dir } = require('console');

exports.fileUpload = async (req, res) => {
try{
  if(!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send({Error: 'Please select files to upload'})
  }else{
    return res.status(200).send({Message: 'Files upload successfully'})
  }
}catch(err) {
  console.log(err);
  return res.status(500).send({Error: 'Error in function fileUpload'})
  }
}


exports.files = async (req, res) => {
  try{
    let dir = 'uploads'
    //let dirbuff = Buffer.from(dir)
    let files = fs.readdirSync(dir)
    if(files.length ===0) return res.status(200).send({Message: 'Not content files'})
      return res.status(200).send({Message: 'Files', files})
    
  }catch(err) { 
    console.log(err);
    return res.status(400).send({Error: 'Error in files function'})
  }
}


