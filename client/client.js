import React from 'react'

import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import { Router, Route, browserHistory } from 'react-router'

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


import ContainerShowUser from './containers/Users/ShowUser'
import ContainerList from './containers/Users/List'
import ContainerCreateUser from './containers/Users/CreateNewUser'
import Layout from './containers/Ui/Layout'
import store from './store'

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/users" testing="dsad" component={ContainerList} />
            <Route path="/users/create" component={ContainerCreateUser} />
            <Route path="/users/:userId" component={ContainerShowUser} />
            
        </Router>
    </Provider>,
    document.getElementById('root')
);
