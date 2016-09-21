import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import ContainerList from './components/UsersList'


import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Layout from '../Ui/Layout'
import Paper from 'material-ui/Paper'

const PaperStyle = {
    width: 500,
    margin: '10px auto 0 auto'
};
const subheader = {
  textAlign: 'center'
};


class ShowUser extends React.Component {
    constructor(props){
        super(props);
        
    }
    render(){
        return (
            <Layout>

                <Paper style={PaperStyle} zDepth={1}>
                <Subheader style={subheader}>User information</Subheader>
                    <List>

                        <ListItem
                        primaryText="Id"
                        secondaryText={this.props.params.userId}
                        />
                        <ListItem
                        primaryText="Meno"
                        secondaryText={this.props.users[this.props.params.userId].name}
                        />
                        <ListItem
                        primaryText="Email"
                        secondaryText={this.props.users[this.props.params.userId].email}
                        />

                    </List>
                </Paper>
            </Layout>
        )
    }
}

            // {this.props.users.map(user => (
            //             <User 
            //                 key={user.id}
            //                 {...user}
            //                 onClick={this.props.onShowUser}
            //             />
            //         )
            // )}

/*
{this.props.data.map(data => 
            (
                <li>{data}</li>
            )    
        )}
*/

/**
 *                     (App)
 * Inject state to Presentational component
 */

const mapStateToProps = (state) => {
  return {
      users: state.users
  }
};
/**
 *                     (App)
 * Inject state to Presentational component
 */
const mapDispatchToProps = (dispatch) => {
  return {
  }
};

/**
 * Connecting
 *    (App)           >=>         (ContainerApp)
 * Presentational component to container component
 */
const ContainerShowUser= connect(
   mapStateToProps
//   mapDispatchToProps
)(ShowUser)

/**
 * Export ContainerApp to client.js
 */
export default ContainerShowUser;

