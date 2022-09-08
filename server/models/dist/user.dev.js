"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var bcrypt = require('bcrypt');

var userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  permission: {
    type: Boolean,
    "default": false
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!']
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  }
});
userSchema.pre('save', function _callee(next) {
  var saltRounds;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(this.isNew || this.isModified('password'))) {
            _context.next = 5;
            break;
          }

          saltRounds = 10;
          _context.next = 4;
          return regeneratorRuntime.awrap(bcrypt.hash(this.password, saltRounds));

        case 4:
          this.password = _context.sent;

        case 5:
          next();

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, null, this);
});

userSchema.methods.isCorrectPassword = function _callee2(password) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", bcrypt.compare(password, this.password));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  }, null, this);
};

var User = model('user', userSchema);
module.exports = User;