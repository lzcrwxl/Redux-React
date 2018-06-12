const express = require('express')
const utils = require('utility')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const _filter = {'pwd':0,'_v':0}

Router.get('/list',function(req,res){
  const {type}=req.query
  // User.remove({},function(e,d){})
  User.find({type},(err,doc) => {
    return res.json({code:0,data:doc})
  })
})

Router.post('/update',function(req,res){
  const userid=req.cookies.userid;
  if(!userid){
    return res.json.dumps({code:1})
  }
  const body=req.body;
  User.findByIdAndUpdate(userid,body,function(err,doc){
    const data=Object.assign({},{
      user:doc.user,
      type:doc.type
    },body)
    return res.json({code:0,data})

  })
})

Router.post('/login',function(req,res){
  const {user,pwd} = req.body
  User.findOne({user,pwd:md5Pwd(pwd)},function(e,d){
    if(!d){
      return res.json({code:1,msg:'用户名或者密码错误'})
    }
    res.cookie('userid',d._id)
    return res.json({code:0,data:d})
  })
})
Router.post('/register',function(req,res){

  const {user,pwd,type} = req.body
  User.findOne({user},function(err,doc){
    if(doc){
      return res.json({code:1,msg:'用户名重复'})
    }
    const userModel= new User({user,type,pwd:md5Pwd(pwd)})
    userModel.save(function(e,d){
      if(err){
        return res.json({code:1,msg:'后端出左'})
      }
      const {user,type,_id} =d;
      res.cookie('userid',_id)
      return res.json({code:0,data:{user,type,_id}})
    })
  })
})
Router.get('/info',(req,res)=>{
  const {userid}=req.cookies
  if(!userid){
    return res.json({code:1})
  }
  User.findOne({_id:userid},_filter,(err,doc) => {
    if(err){
      return res.json({code:1,msg:'后端出错'})
    }
    if(doc){
      return res.json({code:0,data:doc})
    }
  })
  return res.json({code:1})
})

module.exports=Router


function md5Pwd(pwd){
  const salt = 'xfdsfsfsdfsdfo23r9x,cn,'
  return utils.md5(utils.md5(pwd+salt))
}