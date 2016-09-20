
/**
 * Why is state = {} ?
 * Because state should not be undefined, after all redux loads it will load
 * the initial state defined in ../store.js
 */
export const ui = (state = {}, action) => {

    switch (action.type) {
        case 'UI_DRAWER_TOGGLE':
            return {
                ...state,
                openDrawer: !state.openDrawer
            };
    
        default:
            return state;
    }
};