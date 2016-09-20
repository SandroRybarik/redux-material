import React from 'react'
import { connect } from 'react-redux'

import AppBar from 'material-ui/AppBar'



const MyAppBar = ({
    onDrawerToggle
}) => (
    <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={onDrawerToggle}
    />
)

/**
 *                     (App)
 * Inject state to Presentational component
 */

const mapStateToProps = (state) => {
  return {
    appbarTitle: state.ui.appbarTitle
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
const ContainerMyAppBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAppBar)

/**
 * Export ContainerApp to client.js
 */
export default ContainerMyAppBar