'use strict';

/**
 * Dependencies
 */
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import Task from '../Task';
/**
 * Declaration
 */
const TaskList = React.createClass({
  displayName: 'TaskList',

  propTypes: {
    tasks: PropTypes.array.isRequired,
    removeTask: PropTypes.func,
    changeTaskState: PropTypes.func
  },

  getInitialState() {
    return {
      tasks: []
    }
  },

  sortTasks(tasks) {
    var doneTasks = tasks.filter(task => task.isDone);
    var undoneTasks = tasks.filter(task => !task.isDone);
    return [...undoneTasks, ...doneTasks];
  },

  render() {
    const classList = ['TaskList'];
    const tasks = this.sortTasks(this.props.tasks);

    if (this.props.className) {
      classList.push(...this.props.className.split(' '));
    }

    const className = classnames(classList, {
      'is-empty': !tasks.length
    });

    return (
      <div className={className}>
        <ul className="TaskList-list">
          {tasks.map(task => (
            <li className="TaskList-item" key={`task${task._id}`}>
              <Task task={task} changeTaskState={this.props.changeTaskState} removeTask={this.props.removeTask} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
});
export default TaskList;
