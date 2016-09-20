import { applyMiddleware, createStore } from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

import combinedReducers from './combinedReducers'

/**
 * Apply middleware, check docs!
 */
const middleware = applyMiddleware(thunk, logger());

/**
 * Our initial state of our app
 */
const initialState = {
    ui : {
        appbarTitle: 'HelloWorld!',
        openDrawer: false
    },

    users: [
        {id: 1, name: 'Sandro', email: 'sandro.rybarik@gmail.com'},
        {id: 2, name: 'Marko', email: 'marko.rybarik@gmail.com'},
        {id: 3, name: 'Martin', email: 'marko.rybarik@gmail.com'}
    ]
};

const user = {
    name: '',
    email: '',
    ico: '',
    dic: ''
};

export default createStore(combinedReducers, initialState ,middleware);