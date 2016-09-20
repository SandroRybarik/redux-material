import React, { PropTypes } from 'react';
import {List} from 'material-ui/List';
import User from './User'
import Layout from '../../Ui/Layout'
import axios from 'axios'
// OLD
// const UsersList = (
//     {
//         users,
//         onShowUser
//     }
// ) => {
//     return (
//         <List>
//             {users.map(user => 
//                 <User 
//                     key={user.id}
//                     {...user}
//                     onClick={onShowUser}
//                 />
//             )}
//         </List>
//     )
// }

class UsersList extends React.Component{

    constructor(props) {
        super(props);
        
    }
    componentDidMount(){
        this.props.fetchUsers();
    }
    render(){
        
        return (
                <Layout>
                    <List>
                        {this.props.users.map(user => (
                                <User 
                                    key={user.id}
                                    onShowUser={this.props.onShowUser}
                                    {...user}
                                    
                                />
                            )
                        )}
                    </List>  
                </Layout>
        )
    }
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