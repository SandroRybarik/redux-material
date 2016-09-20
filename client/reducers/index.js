import { combineReducers } from 'redux'
import { newReducer } from './newReducer'
import { users } from './users'
/**
 * combineReducers function () 
 * @param object where you map state(store) property to reducer
 */

const reducers = combineReducers({
    //state prop :   reducer
    applicationUi: newReducer,
    users: users
});

export default reducers;