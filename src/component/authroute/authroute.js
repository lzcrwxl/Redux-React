import React from 'react'
import axios from 'axios'
import { withRouter} from 'react-router-dom'
import {loadData} from '../../redux/user.redux'
import {connect} from 'react-redux'


@withRouter
@connect(
  null,
  {loadData}
)
class AuthRoute extends React.Component{
  componentDidMount(){
    const publicList =['/login','register']
    const pathname=this.props.location.pathname
    console.log(pathname)
    if(publicList.indexOf(pathname)>-1){
      return null
    }
    axios.get('/user/info')
      .then(res=>{
        if(res.status==200){
          if(res.data.code==0){
            this.props.loadData(res.data.data)
          }else{
            this.props.history.push('/login')
          }
        }
      })

    // 是否登陆
  }
  render(){
    return null
  }
}

export default AuthRoute