import React from 'react'
import { connect } from 'react-redux';
import {Result,List,WhiteSpace} from 'antd-mobile'
import browserCookie from 'browser-cookies'

@connect(
  state=>state.user
)

class User extends React.Component{
  constructor(props){
    super(props)
    this.logout=this.logout.bind(this)
  }
  logout(){
    browserCookie.erase('userid')
    console.log('logout')
  }
  render(){
    const props=this.props
    console.log(this.props)
    const Item =List.Item;
    const Brief =Item.Brief;
    return props.user?(
      <div>
      <Result
        img={<img src={require(`../img/${this.props.avatar}.png`)}
        style={{width:50}}/>}
        title={this.props.user}
        message={props.type=='boss'?props.company:null}
      />
        <List renderHeader={()=>'简介'}>
          <Item
          multipleLine
          >{props.title}
            {props.desc.desc.split('\n').map(v=><Brief key={v}>{v}</Brief>)}
            {props.money?<Brief>薪资：{props.money}</Brief>:null}
          </Item>
        </List>
        <WhiteSpace></WhiteSpace>
        <List>
          <Item>注销</Item>
        </List>
      </div>
    ):null
  }
}

export default User;