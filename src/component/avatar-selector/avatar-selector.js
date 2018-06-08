
import React from 'react'
import {Grid,List} from 'antd-mobile'
import PropTypes from 'prop-types'
class AvatarSelector extends React.Component{
  static propTypes={
    selectorAvatar:PropTypes.func.isRequired
  }
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    const avatarList='boy,woman,man,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'.split(',').map(v=>({
      icon:require(`../img/${v}.png`),
      text: v
    }))
    const gridHeader=this.state.text
                    ?(<div>
                      <span>已选择头像</span>
                      <img src={this.state.icon} alt=""
                      style={{width:20}}/>
                    </div>)
                    : <div>请选择头像</div>
    return(
      <div>
        <List renderHeader={()=>gridHeader}>
          <Grid 
          data={avatarList} 
          activeStyle={false} 
          columnNum={5}
          onClick={elm=>{
            this.setState(elm)
            this.props.selectorAvatar(elm.text)
          }}></Grid>
        </List>
      </div>
    )
  }
}

export default AvatarSelector;