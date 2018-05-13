import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import Auth from './Auth'
import Dashboard from './Dashboard'
import './config'
import 'antd-mobile/dist/antd-mobile.css'
// import {counter} from './index.redux'
import reducers from './reducer'
// const reduxDevtools=window.devToolsExtension
const store = createStore(reducers, compose(
  applyMiddleware(thunk), 
  window.devToolsExtension
  ? window.devToolsExtension()
  : f => f))


ReactDom.render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/login' exact component={Auth}></Route>
          <Route path='/dashboard' component={Dashboard}></Route>
          <Redirect to='/dashboard'></Redirect>
        </Switch>
      
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))