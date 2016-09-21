import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'


import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper'
import Layout from '../Ui/Layout'

/**
 * LAYOUT FILE
 */

const style = {
  width: 300,
  padding:15,
  margin: '10px auto 0 auto',
  display: 'block',
};
const subheader = {
  textAlign: 'center'
};

class CreateUserForm extends React.Component {
    constructor(props){
        super(props);
        this.name = '';
    }


    render() {
        return (
            <Layout>
             <Paper style={style} zDepth={1} >
             <Subheader style={subheader}>Create User</Subheader>
              <TextField
                onChange={(event,value)=>{this.name=value}}
                hintText="hintText"
                floatingLabelText="Field1"
                fullWidth={true}
              /><br />
              <TextField
                hintText="hintText"
                floatingLabelText="Field2"
                fullWidth={true}
              /><br />
              <TextField
                hintText="hintText"
                floatingLabelText="Field3"
                fullWidth={true}
              /><br />
              <TextField
                hintText="Lorem ipsum dolor simet"
                floatingLabelText="Note"
                fullWidth={true}
                multiLine={true}
                rows={4}
              /><br />
              <RaisedButton label="Ulozit" primary={true} onClick={()=>{this.props.createUser()}} />
              </Paper>
            </Layout>
        )
    }
}


/**
 *                     (App)
 * Inject state to Presentational component
 */

const mapStateToProps = (state) => {
  return {
    name: state.createUserForm.name
  }
};
/**
 *                     (App)
 * Inject state to Presentational component
 */
const mapDispatchToProps = (dispatch) => {
  return {
    createUser: () => {
        dispatch({type: 'CREATE_USER'});
    },
    fetchUsers: () => {
        axios.get('http://private-599deb-media15.apiary-mock.com/users')
            .then(function (response) {
                dispatch({type: 'FETCH_USERS_SUCCESS', response: response.data });
            })
            .catch(function (error) {
                return error;
            });
    }
  }
};

/**
 * Connecting
 *    (App)           >=>         (ContainerApp)
 * Presentational component to container component
 */
const ContainerCreateNewUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUserForm)

/**
 * Export CreateNewUser to client.js
 */
export default ContainerCreateNewUser