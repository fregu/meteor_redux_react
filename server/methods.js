'use strict';

/**
 * Dependencies
 */
import { Mongo } from 'meteor/mongo';

import Tasks from '../collections/tasks';

/**
 * Declaration
 */
Meteor.methods({
  addTask (params) {
    return Tasks.insert(params, (error, _id) => {
      if (error) {
        throw new Meteor.Error(e);
        return;
      }
      // Task inserted in database
      return _id;
    });
  },

  removeTask (taskId) {
    return Tasks.remove(taskId);
  },

  setDone (taskId) {
    return Tasks.update(taskId, {$set: {isDone: true}});
  },

  setUndone (taskId) {
    return Tasks.update(taskId, {$set: {isDone: false}});
  }
});
