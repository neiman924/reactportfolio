"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var dateFormat = require('../utils/dateFormat');

var commentSchema = new Schema({
  comment: {
    type: String,
    required: 'You need to leave a comment!',
    minlength: 1,
    maxlength: 280,
    trim: true
  },
  name: {
    type: String,
    required: false,
    trim: true
  },
  date_created: {
    type: Date,
    "default": Date.now,
    get: function get(timestamp) {
      return dateFormat(timestamp);
    }
  },
  email: {
    type: String,
    required: false,
    trim: true
  }
});
var Comment = model('Comment', commentSchema);
module.exports = Comment;