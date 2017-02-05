'use strict';

/**
 * Dependencies
 */
import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Tasks from '../../collections/tasks';

/**
 * Declaration
 */
export default (...args) => {
  const store = createStore(reducers, ...args, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  Tracker.autorun(() => {
    store.dispatch({
      type: 'SET_TASKS',
      tasks: Tasks.find({}).fetch()
    });
  });

  return store;
};
