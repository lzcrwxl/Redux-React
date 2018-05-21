const express = require("express")
const userRouter = require('./user')

const app=express()
app.use('/user',userRouter)





app.listen(8888,function () {
  console.log("hello")
})