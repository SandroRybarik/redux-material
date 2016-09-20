import React, { PropTypes } from 'react'
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const User = ({
    name,
    email,
    onShowUser
}) => (

    
      <ListItem
        primaryText={name}
        secondaryText={email}
        leftAvatar={<Avatar src="https://cdn0.iconfinder.com/data/icons/profession-vol-1/32/umpire_cricket_ball_test_oneday_avatar_legumpire-512.png" />}
        onClick={onShowUser}
      />

)

// User.propTypes = {
//   onShowUser: PropTypes.func.isRequired,
//   email: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired
// }

export default User