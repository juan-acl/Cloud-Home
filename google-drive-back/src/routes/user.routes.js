'use strict'

const express = require('express');
const user = require('../controllers/user.controller')

const api = express.Router();

api.get('/testUser', user.testUser);


module.exports = api;

