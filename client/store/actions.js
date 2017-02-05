'use strict';

/**
 * Dependencies
 */
import { Meteor } from 'meteor/meteor';
import React from 'react';

/**
 * Declaration
 */

export const addTask = (data) => {
  return (dispatch) => {
    Meteor.call('addTask', data, (error, result) => {
      if (error) {
        dispatch({
          type: 'TASK_ERROR',
          error,
        });
      } else {
        dispatch({
          type: 'TASK_ADDED'
        });
      }
    });
  };
};

export const removeTask = (taskId) => {
  return (dispatch) => {
    Meteor.call('removeTask', taskId, (error, result) => {
      if (error) {
        dispatch({
          type: 'TASK_ERROR',
          error,
        });
      } else {
        dispatch({
          type: 'TASK_REMOVED'
        });
      }
    });
  };
};

export const changeTaskState = (taskId, state) => {
  return (dispatch) => {
    if (state) {
      Meteor.call('setDone', taskId);
    } else {
      Meteor.call('setUndone', taskId);
    }
  }
};
