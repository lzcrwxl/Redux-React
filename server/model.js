// 链接mongo

const mongoose = require('mongoose')


const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',()=>{
  console.log('mongo connect success')
})