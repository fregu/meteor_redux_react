'use strict';

/**
 * Dependencies
 */
import path from 'path';
import dotenv from 'dotenv';
import { Meteor } from 'meteor/meteor';
import Tasks from '../collections/tasks';

/**
 * Configuration
 */
dotenv.load({
  path: path.resolve(process.env.PWD, '.env')
});

/**
 * Declaration
 */
Meteor.publish('tasks', function(options = {}) {
  let projection = {
    fields: { _id: 1, text: 1, isDone: 1 }
  };

  if (options.limit) {
    projection.limit = options.limit;
  }

  projection.sort = { createdAt: -1 };

  return Tasks.find({}, projection);
});
