import React from 'react'

import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

//import ContainerApp from './containers/App'

import App from './components/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>   
    </Provider>,
    document.getElementById('root')
);
