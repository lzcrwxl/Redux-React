const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

Router.get('/list',function(req,res){
  User.find({},(err,doc) => {
    return res.json(doc)
  })
})
Router.post('/register',function(req,res){

  const {user,pwd,type} = req.body
  User.findOne({user},function(err,doc){
    if(doc){
      return res.json({code:1,msg:'用户名重复'})
    }
    User.create({user,pwd,type},(err,doc) => {
      if(err){
        return res.json({code:1,msg:'后端出左'})
      }
      return res.json({code:0})
    })
  })
})
Router.get('/info',(req,res)=>{
  return res.json({code:1})
})

module.exports=Router