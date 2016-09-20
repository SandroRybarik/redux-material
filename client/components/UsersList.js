import React, { PropTypes } from 'react';
import {List} from 'material-ui/List';

import User from './User'


const UsersList = (
    {
        users,
        onShowUser
    }
) => {
    return (
        <List>
            {users.map(user => 
                <User 
                    key={user.id}
                    {...user}
                    onClick={onShowUser}
                />
            )}
        </List>
    )
}

// UsersList.propTypes = {
//   users: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number,
//     email: PropTypes.bool,
//     name: PropTypes.string
//   })),
//   onShowUser: PropTypes.func
// }

export default UsersList