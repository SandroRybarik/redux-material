import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

/**
 * Reducers List
 */
import { ui } from './containers/Ui/reducer'
import { users } from './containers/Users/reducer'

/**
 * combineReducers function () 
 * @param object where you map state(store) property to reducer
 */

const combinedReducers = combineReducers({
    //state prop :   reducer
    ui: ui,
    users: users,
    routing: routerReducer
});

export default combinedReducers;