const express = require('express')
const utils = require('utility')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

Router.get('/list',function(req,res){
  // User.remove({},function(e,d){})
  User.find({},(err,doc) => {
    return res.json(doc)
  })
})

Router.post('/login',function(req,res){
  const {user,pwd} = req.body
  User.findOne({user,pwd:md5Pwd(pwd)},function(e,d){
    if(!d){
      return res.json({code:1,msg:'用户名或者密码错误'})
    }
    return res.json({code:0,data:d})
  })
})
Router.post('/register',function(req,res){

  const {user,pwd,type} = req.body
  User.findOne({user},function(err,doc){
    if(doc){
      return res.json({code:1,msg:'用户名重复'})
    }
    User.create({user,type,pwd:md5Pwd(pwd)},(err,doc) => {
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


function md5Pwd(pwd){
  const salt = 'xfdsfsfsdfsdfo23r9x,cn,'
  return utils.md5(utils.md5(pwd+salt))
}