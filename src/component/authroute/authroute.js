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

    // 是否登陆
  }
  render(){
    return null
  }
}

export default AuthRoute