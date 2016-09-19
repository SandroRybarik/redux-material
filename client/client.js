import React from 'react'

import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import ContainerApp from './containers/App'

import store from './store'

ReactDOM.render(
    <Provider store={store}>

        <ContainerApp />
        
    </Provider>,
    document.getElementById('root')
);
