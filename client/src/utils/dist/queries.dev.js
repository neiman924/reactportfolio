"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QUERY_COMMENT = exports.QUERY_USER = void 0;

var _client = require("@apollo/client");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  query getComments {\n    comments {\n      id\n      comment\n      name\n      date_created\n      email\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query user($name: String!) {\n    user(name: $name) {\n      id\n      name\n      email\n      permission\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var QUERY_USER = (0, _client.gql)(_templateObject());
exports.QUERY_USER = QUERY_USER;
var QUERY_COMMENT = (0, _client.gql)(_templateObject2());
exports.QUERY_COMMENT = QUERY_COMMENT;