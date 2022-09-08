"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ADD_COMMENT = exports.ADD_USER = exports.LOGIN = void 0;

var _client = require("@apollo/client");

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  mutation addComment($comment: String!,$name: String,$email: String) {\n    addComment(comment: $comment,name:$name,email:$email) {\n      _id\n      comment\n      name\n      email\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation addUser($name: String!, $email: String!, $password: String!) {\n    addUser(name: $name, email: $email, password: $password) {\n      token\n      user {\n        _id\n        name\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        name\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LOGIN = (0, _client.gql)(_templateObject());
exports.LOGIN = LOGIN;
var ADD_USER = (0, _client.gql)(_templateObject2());
exports.ADD_USER = ADD_USER;
var ADD_COMMENT = (0, _client.gql)(_templateObject3());
exports.ADD_COMMENT = ADD_COMMENT;