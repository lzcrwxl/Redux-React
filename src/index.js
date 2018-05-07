import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider} from 'react-redux'
import { BrowserRouter, Route, Link} from 'react-router-dom'

import App from './App'
import { counter} from './index.redux'
import { SSL_OP_PKCS1_CHECK_2 } from 'constants';

// const reduxDevtools=window.devToolsExtension
const store = createStore(counter,compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
))

function Erying() {
  return <h2>二营</h2>
}
function Qibinglian() {
  return <h2>骑兵连</h2>
}
ReactDom.render(
  (<Provider  store={store}>
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to='/'>一</Link>
          </li>
          <li>
            <Link to='/erying'>二</Link>
          </li>
          <li>
            <Link to='qibinglian'>骑兵连</Link>
          </li>
        </ul>
        <Route path='/' exact component={App}></Route>
        <Route path='/erying' component={Erying}></Route>
        <Route path='/qibinglian' component={Qibinglian}></Route>
      </div>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
)