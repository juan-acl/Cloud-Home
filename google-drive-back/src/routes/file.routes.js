'use strict'

const express = require('express');
const fileUpload = require('express-fileupload');
const file = require('../controllers/file.controller');
const {upload} = require('../middlewares/multer');

const api = express.Router();

api.post('/upload', upload.array('files'), file.fileUpload);
api.get('/files', file.files);

module.exports = api;
