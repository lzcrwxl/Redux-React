const express = require("express")
const utils = require('utility')
const userRouter = require('./user')
const bodyParser= require('body-parser')
const cookieParser = require('cookie-parser')
const app=express()


app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)





app.listen(8888,function () {
  console.log("hello")
})