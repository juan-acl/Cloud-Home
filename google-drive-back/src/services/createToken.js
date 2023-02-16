'use strict'

const jwt = require('jsonwebtoken');
const moment = require('moment');
const secretKey = 'SecretKey';

exports.createToken = async (user) => {
  try{
    const payload = {
      sub: user._id,
      username: user.username,
      password: user.password,
      role: user.role,
      iat: moment().unix(),
      exp: moment().add(1, 'hour').unix()
    }
    return jwt.Encode(payload, secretKey)
  }catch(err) {
    console.log(err);
    return err;
  }
}


