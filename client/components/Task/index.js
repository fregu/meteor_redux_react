'use strict';

/**
 * Dependencies
 */
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

/**
 * Declaration
 */
const Task = React.createClass({
  displayName: 'Task',

  propTypes: {
    task: PropTypes.object.isRequired,
    removeTask: PropTypes.func,
    changeTaskState: PropTypes.func
  },

  onChange(event) {
    this.props.changeTaskState(this.props.task._id, event.target.checked);
  },

  onRemove(event) {
    event.preventDefault();
    this.props.removeTask(this.props.task._id);
  },

  render() {
    const {isDone, _id: taskid, text} = this.props.task;

    const className = classnames('Task', {
      'is-done': isDone
    });

    return (
      <div className={className}>
        <div className="Task-wrapper">
          <input id={`task${taskid}`} type="checkbox" className="Task-checkbox" onChange={this.onChange} checked={isDone} />
          <label htmlFor={`task${taskid}`} className="Task-text">{text}</label>
          <button className="Button Task-removeButton" onClick={this.onRemove}>Remove</button>
        </div>
      </div>
    );
  }
});
export default Task;
