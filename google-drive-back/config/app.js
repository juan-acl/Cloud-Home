'use strict'

//Configuration dependencies
const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const port = process.env.PORT || 3200;

//Configuration client and middleware
const cors = require('cors'); // Is a middleware

//Express instance
  const app = express();

//Configuration dependencies client
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());


//Routes of constrollers
const userRouter = require('../src/routes/user.routes');
const fileRouter = require('../src/routes/file.routes');

//Usage routes controllers for clients
app.use('/user', userRouter)
app.use('/file', fileRouter);



//Default endpoints
app.get('/', (req, res) => {
  return res.status(200).send({Message: 'WELCOME TO MY API HOME CLOUD...'});
})

app.get('*', (req, res) => {
  return res.status(404).send({Error: 'ENPOINT NOT FOUND'})
})


//Server express
exports.initServer = () => app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

