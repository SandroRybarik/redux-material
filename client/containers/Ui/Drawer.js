import React from 'react';
import { connect } from 'react-redux';

import CustomDrawer from './components/CustomDrawer'

/**
 *                     (App)
 * Inject state to Presentational component
 */

const mapStateToProps = (state) => {
  return {
    openDrawer: state.ui.openDrawer
  }
};
/**
 *                     (App)
 * Inject state to Presentational component
 */
const mapDispatchToProps = (dispatch) => {
  return {
    onDrawerToggle: () => {
      dispatch({type: 'UI_DRAWER_TOGGLE'});
    }
  }
};

/**
 * Connecting
 *    (App)           >=>         (ContainerApp)
 * Presentational component to container component
 */
const ContainerCustomDrawer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomDrawer)

/**
 * Export ContainerApp to client.js
 */
export default ContainerCustomDrawer;