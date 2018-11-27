import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux'  
import { Provider } from 'react-redux'  
import createSagaMiddleware from 'redux-saga'  
import { Router, Route, browserHistory, IndexRoute } from 'react-router'


import App from './App'  
import Login from './login'  
import Signup from './signup'  
import Widgets from './widgets'  
import BodyContainer from './components/BodyContainer'
import './index.css'

import IndexReducer from './index-reducer'  
import IndexSagas from './index-sagas'

import { checkIndexAuthorization, checkWidgetAuthorization } from './lib/check-auth';
import PostForm from './components/posts/PostForm'



import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();

/*eslint-disable */
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&  
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
/*eslint-enable */

const store = createStore(
    IndexReducer,
    composeSetup(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(IndexSagas);


ReactDOM.render(  
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App} >
          <IndexRoute onEnter={checkIndexAuthorization(store)}/>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route onEnter={checkWidgetAuthorization(store)} path="/widgets" component={BodyContainer} >
            <Route path="/posts" components={{allposts : PostForm}}/>
          </Route>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root'),
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
