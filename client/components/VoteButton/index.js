'use strict';

/**
 * Dependencies
 */
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
/**
 * Declaration
 */
const voteQueue = [];
const TaskList = React.createClass({
  displayName: 'TaskList',

  propTypes: {
    tasks: PropTypes.array.isRequired
  },

  getInitialState() {
    return {
      tasks: []
    };
  },

  render() {
    const classList = ['TaskList'];

    if (this.props.className) {
      classList.push(...this.props.className.split(' '));
    }

    const className = classnames(classList, {
      'is-empty': !this.props.tasks.length
    });

    return (
      <div className={className}>
        <ul class="TaskList-list">
          {this.props.tasks.map(task => (
            <li class="TaskList-item">
              <Task key={`task${task.id}`} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
});
export default TaskList;
