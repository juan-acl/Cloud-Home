'use strict'

const fs = require('fs');
const mongoConfig = require('./config/mongodb');
const app  = require('./config/app');
const userAdmin = require('./src/controllers/user.controller')

if(fs.existsSync('./uploads')) {
  console.log('El directorio ya ha sido creado')
}else{
  fs.mkdir('./uploads', (error) => {
    if(!error) {
      console.log('Directorio creado')
    }
  })
}

mongoConfig.init();
app.initServer();
userAdmin.createAdmin();
