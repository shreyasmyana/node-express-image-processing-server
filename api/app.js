const express = require('express')
const path = require('path')
const { ap } = require('ramda')

const app = express()

const pathToIndex = path.resolve('__dirname', '../client/index.html');
app.use('/*',(request,response)=>{
    response.sendfile(pathToIndex);
});

module.exports = app;