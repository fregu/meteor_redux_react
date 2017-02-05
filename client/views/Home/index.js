'use strict';

/**
 * Dependencies
 */
import React, { PropTypes } from 'react';
import { connector } from '../../store';

import AddTaskForm from '../../components/AddTaskForm';
import TaskList from '../../components/TaskList';

/**
 * Configuration
 */
const {object, func, string, array, bool} = PropTypes;

/**
 * Declaration
 */
const Home = React.createClass({
  displayName: 'Home',

  propTypes: {
    loading: bool,
    tasks: array,
    addTask: func,
    removeTask: func,
    changeTaskState: func
  },

  render() {
    if (this.props.loading) {
      return (<p>Loading tasks</p>);
    }

    return (
      <div className="Home layout-container">
        <AddTaskForm addTask={this.props.addTask} />
        <TaskList changeTaskState={this.props.changeTaskState}
                  removeTask={this.props.removeTask}
                  tasks={this.props.tasks} />
      </div>
    );
  }
});

export default connector(Home);
export const View = Home;
