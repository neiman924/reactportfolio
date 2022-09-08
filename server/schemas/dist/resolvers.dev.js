"use strict";

var _require = require('apollo-server-express'),
    AuthenticationError = _require.AuthenticationError;

var _require2 = require('../models'),
    User = _require2.User,
    Comment = _require2.Comment;

var _require3 = require('../utils/auth'),
    signToken = _require3.signToken;

var resolvers = {
  Query: {
    users: function users() {
      return regeneratorRuntime.async(function users$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", User.find());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    comments: function comments() {
      return regeneratorRuntime.async(function comments$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", Comment.find());

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    user: function user(parent, _ref) {
      var email;
      return regeneratorRuntime.async(function user$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              email = _ref.email;
              return _context3.abrupt("return", User.findOne({
                email: email
              }));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  },
  Mutation: {
    addUser: function addUser(parent, _ref2) {
      var name, email, password, user, token;
      return regeneratorRuntime.async(function addUser$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              name = _ref2.name, email = _ref2.email, password = _ref2.password;
              _context4.next = 3;
              return regeneratorRuntime.awrap(User.create({
                name: name,
                email: email,
                password: password,
                permission: permission
              }));

            case 3:
              user = _context4.sent;
              token = signToken(user);
              return _context4.abrupt("return", {
                token: token,
                user: user
              });

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      });
    },
    login: function login(parent, _ref3) {
      var email, password, user, correctPw, token;
      return regeneratorRuntime.async(function login$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              email = _ref3.email, password = _ref3.password;
              console.log('------------------------');
              _context5.next = 4;
              return regeneratorRuntime.awrap(User.findOne({
                email: email
              }));

            case 4:
              user = _context5.sent;

              if (user) {
                _context5.next = 7;
                break;
              }

              throw new AuthenticationError('No user found with this email address');

            case 7:
              _context5.next = 9;
              return regeneratorRuntime.awrap(user.isCorrectPassword(password));

            case 9:
              correctPw = _context5.sent;

              if (correctPw) {
                _context5.next = 12;
                break;
              }

              throw new AuthenticationError('Incorrect credentials');

            case 12:
              token = signToken(user);
              return _context5.abrupt("return", {
                token: token,
                user: user
              });

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      });
    },
    singleUser: function singleUser(parent, _ref4) {
      var email;
      return regeneratorRuntime.async(function singleUser$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              email = _ref4.email;
              return _context6.abrupt("return", User.findOne({
                email: email
              }));

            case 2:
            case "end":
              return _context6.stop();
          }
        }
      });
    },
    addComment: function addComment(parent, _ref5) {
      var comment, name, email, commentText;
      return regeneratorRuntime.async(function addComment$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              comment = _ref5.comment, name = _ref5.name, email = _ref5.email;
              _context7.next = 3;
              return regeneratorRuntime.awrap(Comment.create({
                comment: comment,
                name: name,
                email: email
              }));

            case 3:
              commentText = _context7.sent;
              return _context7.abrupt("return", commentText);

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      });
    }
  }
};
module.exports = resolvers;