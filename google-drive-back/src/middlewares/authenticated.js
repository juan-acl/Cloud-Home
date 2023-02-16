'use strict'

const jwt = require('jsonwebtoken');
const moment = require('moment');
const secret = 'SecretKey';

exports.ensureAuth = (req, res, next) => {
  try{
    if(!req.headers.authorization) {
      return res.status(403).send({Error: 'La peticion no contiene la cabecera de autenticacion'})
    }

  const token = req.headers.authorization.replace(/['"]+/g, '')
    try{
        let payload = jwt.decode(token, secret)
      if(payload.exp <= moment().unix()) return res.status(401).send({Error: 'El token ha expirado'})
    }catch(er) {
      return res.status(404).send({Error: 'El token no es valido'})
    }

  }catch(err) {
    console.log(err);
    return res.status(500).send({Error: 'Error en la peticion "ensureAuth"'})
  }
}

exports.isAdmin = async (req, res, next) => {
  try{
    const user = req.user;
    if(user.role === 'ADMIN') {
      return next()
    }else{
      return res.status(403).send({Error: 'User unauthotized'})
    }
  }catch(err) {
    console.log(err);
    return err;
  }
}
