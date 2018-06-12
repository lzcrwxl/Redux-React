import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Card, WhiteSpace ,WingBlank} from 'antd-mobile'
import { getUserList } from '../../redux/chatuser.redux'

@connect(
  state=>state.chatuser,
  {getUserList}
)
class Genius extends React.Component{
  componentDidMount(){
    this.props.getUserList('boss')
  }
  render(){
    console.log(this.props)
    const Body =Card.Body
    const Header =Card.Header
    return(
      <h2>牛人首頁</h2>
    )
  }
}

export default Genius;