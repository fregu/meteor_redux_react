'use strict';

/**
 * Dependencies
 */
import { combineReducers } from 'redux';

/**
 * Configuration
 */

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_TASKS':
      return action.tasks || state;
    default:
      return state;
  }
};

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return true;
    case 'REMOVE_LOADING':
      return false;
    default:
      return state;
  }
};

/**
 * Declaration
 */
export default combineReducers({
  tasks: tasksReducer,
  isLoading: loadingReducer
});
