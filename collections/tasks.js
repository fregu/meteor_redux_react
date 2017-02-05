'use strict';

/**
 * Dependencies
 */
import { Mongo } from 'meteor/mongo';

/**
 * Configuration
 */
const Schema = {};
const Tasks = new Mongo.Collection('tasks');

/**
 * Declaration
 */

Schema.Task = new SimpleSchema({
  text: {
    type: String,
    label: 'Text'
  },

  modifiedAt: {
    type: Date,
    autoValue: function() {
      return new Date();
    }
  },

  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return { $setOnInsert: new Date() };
      } else {
        this.unset();
      }
    }
  },

  isDone: {
    type: Boolean,
    defaultValue: false
  }
});

Tasks.attachSchema(Schema.Task);

if (Meteor.isServer) {
  Tasks._ensureIndex({
    '_id': 1
  });

  Tasks._ensureIndex({
    'text': 'text',
  });

  Tasks._ensureIndex({
    'isDone': 1
  });
}

export default Tasks;
