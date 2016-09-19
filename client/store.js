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
    }
};

export default createStore(reducers, initialState ,middleware);