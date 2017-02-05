'use strict';

/**
 * Dependencies
 */
import redux, { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';
import createStore from './createStore';
import SubscribeComponent from './SubscribeComponent';

/**
 * Configuration
 */
const initialState = {
  isLoading: true,
  tasks: []
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    tasks: state.tasks
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

/**
 * Declaration
 */
export const store = createStore(initialState);
export const connector = (component) => {
  return connect(mapStateToProps, mapDispatchToProps)(SubscribeComponent(component));
};
