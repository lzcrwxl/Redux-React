// 链接mongo

const mongoose = require('mongoose')


const DB_URL = 'mongodb://127.0.0.1:27017/imooc-chat'
mongoose.connect(DB_URL)


const models={
  user:{
    'user':{type:String,require:true},
    'pwd':{type:String,require:true},
    'type':{type:String,require:true},
    'avatar':{type:String},
    'desc':{type:String},
    // 职位名
    'title':{type:String},
    'company':{type:String},
    'money':{type:String},
  },
  chat:{

  }
}

for(let m in models){
  mongoose.model(m,new mongoose.Schema(models[m]))
}

module.exports={
  getModel:function(name){
    return mongoose.model(name)
  }
}