
/**
 * Process users actions
 */


export const users = (state = {}, action) => {

    switch (action.type) {

        case 'FETCH_USERS_SUCCESS':
            console.log("CATCHING!");
            return action.response;
        // @TODOcase 'USER_SHOW':

        default:
            return state;
    }

}

