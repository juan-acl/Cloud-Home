'use strict'

const User = require("../models/user.model")
const {createToken} = require('../services/createToken');


exports.testUser = (req, res) => {
  console.log(__dirname + './models')
  return res.status(200).send({Message: 'Test userController is running...'})
}

exports.createAdmin = async (req, res) => {
  try{
    const admin = await User.findOne({username: 'admin'})
    if(!admin) {
      const data ={
        username: 'admin',
        password: 'admin'
      }
      const adminCreate = new User(data);
      await adminCreate.save();
    }
  }catch(err) {
    console.log(err);
    return res.status(500).send({Message: 'Error createAdmin'})
  }
}
