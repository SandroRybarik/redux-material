import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import UsersList from './components/UsersList'

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
    onShowUser: (userId) => {
        dispatch({type: 'USER_SHOW', userId});
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
const ContainerList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList)

/**
 * Export ContainerApp to client.js
 */
export default ContainerList;