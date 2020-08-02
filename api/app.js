const express = require('express')
const path = require('path')
const { ap } = require('ramda')
const multer = require('multer')
const app = express()
const router = require('./src/router')

const pathToIndex = path.resolve(__dirname, '../client/index.html');
app.use('/',router);
app.use(express.static(path.resolve(__dirname, 'uploads')))
app.use('/*',(request,response)=>{
    response.sendfile(pathToIndex);
});

module.exports = app;