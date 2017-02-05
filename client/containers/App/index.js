'use strict';

/**
 * Dependencies
 */
import React, { Component, PropTypes } from 'react';
import { connector } from '../../store';

/**
 * Configuration
 */
const {func, array, string, object} = PropTypes;

/**
 * Declaration
 */
const App = React.createClass({
  displayName: 'App',

  propTypes: {
    addTask: func.isRequired,
    removeTask: func.isRequired,
    changeTaskState: func.isRequired,
    tasks: array.isRequired
  },

  componentWillMount() {
    this.props.subscribe('tasks');
  },

  render() {
    const { children, params, routes } = this.props;
    const route = routes[routes.length - 1];

    return (
      <main className="App">
        { React.cloneElement(children, {...this.props}) }
      </main>
    );
  }
});

export default connector(App);
