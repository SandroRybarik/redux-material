import React from 'react';
import { connect } from 'react-redux';

/**
 * STYLE import 
 */
import style from './style.css'

/**
 * BOILERPLATE form Container and bindings react to redux through connect() function
 * @author sandro
 */


/**
 * Presentational component
 */
const App = ({
  greetings,
  message,
  counter,
  onButtonClick
}) => (
  <div>
    <h1>{greetings}</h1>
    <p className={style.test}>{message}</p>
    <button onClick={onButtonClick}>Click me!</button>
    <div>{counter}</div>
  </div>
);

/**
 *                     (App)
 * Inject state to Presentational component
 */

const mapStateToProps = (state) => {
  return {
    greetings: state.applicationUi.greetings,
    counter: state.applicationUi.counter,
    message: state.applicationUi.message
  }
};
/**
 *                     (App)
 * Inject state to Presentational component
 */
const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: () => {
      dispatch({type: 'BUTTON_WAS_CLICKED'});
    }
  }
};

/**
 * Connecting
 *    (App)           >=>         (ContainerApp)
 * Presentational component to container component
 */
const ContainerApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

/**
 * Export ContainerApp to client.js
 */
export default ContainerApp;