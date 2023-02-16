'use strict'

const mongoConfig = require('./config/mongodb');
const app  = require('./config/app');
const userAdmin = require('./src/controllers/user.controller')

mongoConfig.init();
app.initServer();
userAdmin.createAdmin();
