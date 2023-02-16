'use strict'

const mongoose = require('mongoose');

exports.init = () => {
  const uriMongo = 'mongodb://127.0.0.1:27017/GoogleDrive'
  mongoose.Promise = global.Promise;

  mongoose.set('strictQuery', false);
  
  mongoose.connection.on('error', () => {
    console.log('MongoDB | Could not be connet to mongodb')
    mongoose.disconnect()
  }) 
  
  mongoose.connection.on('connecting', () => {
    console.log('MongoDB | Try connecting')
  })
  
  mongoose.connection.once('open', () => {
    console.log('MongoDB | Connected to database')
  })

  mongoose.connection.on('reconnected', () => {
    console.log('MongoDB | Reconnected to mongodb')
  })

  mongoose.connection.on('disconnected', () => {
    console.log('MongoDB | Disconnected to mongodb')
  })

    mongoose.connection.on('connected', () => {
    console.log('MongoDB | Connected to mongodb')
  })
  
  mongoose.connect(uriMongo, {
    connectTimeoutMS: 2500,
    maxPoolSize: 5,
    useNewUrlParser: true
  }).catch(err => console.log(err) )
}
