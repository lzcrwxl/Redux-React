import axios from 'axios'
import {Toast} from 'antd-mobile'
// 拦截请求

axios.interceptors.request.use((config)=> {
  Toast.loading(`加載中`,0)
  return config
})
// 攔截相應
axios.interceptors.response.use((config)=> {
  setTimeout(()=>{
    Toast.hide()
  },2000)
  
  return config
})