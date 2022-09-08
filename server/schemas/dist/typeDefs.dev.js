"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  type User {\n    _id: ID\n    name: String\n    permission: Boolean\n    email: String\n    password: String\n  }\n\n\n  type Comment {\n    _id: ID\n    comment: String\n    name: String\n    date_created: String\n    email: String\n  }\n\n  type Auth {\n    token: ID!\n    user: User\n  }\n\n  type Query {\n    users: [User]\n    user(user: String!): User\n    comments: [Comment]\n    me: User\n  }\n\n  type Mutation {\n    addUser(name: String!, email: String!, password: String!,permission: Boolean): Auth\n    login(email: String!, password: String!): Auth\n    addComment(comment: String!,name: String,email:String): Comment\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _require = require('apollo-server-express'),
    gql = _require.gql;

var typeDefs = gql(_templateObject());
module.exports = typeDefs;