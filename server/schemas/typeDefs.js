const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    permission: Boolean
    email: String
    password: String
  }


  type Comment {
    _id: ID
    comment: String
    name: String
    date_created: String
    email: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(user: String!): User
    comments: [Comment]
    me: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!,permission: Boolean): Auth
    login(email: String!, password: String!): Auth
    addComment(comment: String!,name: String,email:String): Comment
  }
`;

module.exports = typeDefs;
