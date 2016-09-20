
export const users = (state = {}, action) => {

    switch (action.type) {
        case 'FETCH_USERS':
            return {
                name: 'new user', email: 'new email'
            }
        
        default:
            return state;
    }

}

