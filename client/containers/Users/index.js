import React from 'react';
import { connect } from 'react-redux';

import UsersList from '../../components/UsersList'

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
    onShowUser: () => {
      dispatch({type: 'USER_SHOW'});
    }
  }
};

/**
 * Connecting
 *    (App)           >=>         (ContainerApp)
 * Presentational component to container component
 */
const ContainerUsers = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList)

/**
 * Export ContainerApp to client.js
 */
export default ContainerUsers;