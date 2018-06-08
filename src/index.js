import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import './config'
import 'antd-mobile/dist/antd-mobile.css'
import reducers from './reducer'
import Login from './container/login/login';
import Register from './container/register/Register';
import AuthRoute from './component/authroute/authroute';
import BossInfo from './container/bossinfo/bossinfo';
import GeniusInfo from './container/geniusinfo/geniusinfo';
import './index.css'

const store = createStore(reducers, compose(
  applyMiddleware(thunk), 
  window.devToolsExtension? window.devToolsExtension(): f => f))


ReactDom.render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute></AuthRoute>
        <Switch>
          <Route path='/bossinfo' component={BossInfo}></Route>
          <Route path='/geniusinfo' component={GeniusInfo}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
        
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))