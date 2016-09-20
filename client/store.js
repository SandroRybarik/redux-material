import { applyMiddleware, createStore } from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducers from './reducers'

/**
 * Apply middleware, check docs!
 */
const middleware = applyMiddleware(thunk, logger());

/**
 * Our initial state of our app
 */
const initialState = {
    applicationUi : {
        greetings: 'Helloworld!',
        message: 'Open console to see what is going on.',
        counter: 0
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

export default createStore(reducers, initialState ,middleware);