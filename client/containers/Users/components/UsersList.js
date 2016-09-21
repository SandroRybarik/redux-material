import React, { PropTypes } from 'react'
import {List} from 'material-ui/List';
import User from './User'
import Layout from '../../Ui/Layout'
import axios from 'axios'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
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

const PaperStyle = {
    width: 500,
    margin: '10px auto 0 auto'
};
const subheader = {
  textAlign: 'center'
};

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
                    <Paper style={PaperStyle} zDepth={2} >

                    <Subheader style={subheader}>List of users</Subheader>

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
                    </Paper>
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