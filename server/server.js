const express = require("express")
const mongoose = require('mongoose')

// 链接mongo
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',()=>{
  console.log('mongo connect success')
})

const User = mongoose.model('user',new mongoose.Schema({
  user:{type:String,require:true},
  age:{type:Number,require:true},
}))

// User.create({
//   user:'wuxiaolong',
//   age:10
// },function(err,doc){
//   if(!err){
//     console.log(doc)
//   }else{
//     console.log(err)
//   }
// })
// User.remove({age:18},function (err,doc) {
//   console.log(doc)
// })
// User.update({'user':'xiaoming'},{'$set':{age:26}},function (err,doc) {
//   console.log(doc)
// })

const app=express()

app.get("/",function(req,res){
  res.send(
    '<h1>Hello wordd</h1>'
  )
})
app.get("/data",function(req,res){
  User.findOne({'user':'xiaoming'},function (err,doc) {
    res.json(doc)
  })
})


app.listen(8888,function () {
  console.log("hello")
})