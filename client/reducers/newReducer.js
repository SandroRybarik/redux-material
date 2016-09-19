
/**
 * Why is state = {} ?
 * Because state should not be undefined, after all redux loads it will load
 * the initial state defined in ../store.js
 */
export const newReducer = (state = {}, action) => {

    switch (action.type) {
        case 'BUTTON_WAS_CLICKED':
            return {
                ...state,
                counter: state.counter + 1
            };
    
        default:
            return state;
    }
};