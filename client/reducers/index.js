import { combineReducers } from 'redux'
import { newReducer } from './newReducer'

/**
 * combineReducers function () 
 * @param object where you map state(store) property to reducer
 */

const reducers = combineReducers({
    //state prop :   reducer
    applicationUi: newReducer
});

export default reducers;