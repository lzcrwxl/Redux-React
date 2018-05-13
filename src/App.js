import React,{Component} from 'react'
import { connect } from 'react-redux'
import {add,remove,addAsync} from './index.redux'


@connect(
  state=>({num:state.counter}),
  {add,remove,addAsync}
)
class App extends Component {
  render(){
    return (
      <div>
        <h1>现有{this.props.num}</h1>
        <button onClick={this.props.add}>申请武器</button>
        <button onClick={this.props.remove}>上交武器</button>
        <button onClick={this.props.addAsync}>拖两天给</button>
      </div>
    )
  }
}

export default App