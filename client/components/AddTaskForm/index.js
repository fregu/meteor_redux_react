'use strict';

/**
 * Dependencies
 */
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import Form from '../Form';

/**
 * Declaration
 */
const AddTaskForm = React.createClass({
  displayName: 'AddTaskForm',

  propTypes: {
    addTask: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      value: ''
    };
  },

  onChange(event, inputs) {
    this.setState({
      value: inputs.task
    });
  },

  onSubmit(event, inputs) {
    event.preventDefault();
    this.props.addTask({
      text: inputs.task
    });
  },

  render() {
    const className = classnames('AddTaskForm', {
      'is-empty': !this.state.value.length
    });

    return (
      <div className={className}>
        <Form onSubmit={this.onSubmit} onChange={this.onChange} submit="Add" fields={[
          {
            type: 'text',
            id: 'task-input',
            placeholder: 'eg. Buy toothpicks..',
            name: 'task',
            value: this.state.value
          }
        ]}>
        </Form>
      </div>
    );
  }
});
export default AddTaskForm;
