"use strict";

var _require = require('apollo-server-express'),
    ApolloServer = _require.ApolloServer;

var _require2 = require('./utils/auth'),
    authMiddleware = _require2.authMiddleware;

var _require3 = require('./schemas'),
    typeDefs = _require3.typeDefs,
    resolvers = _require3.resolvers;

var path = require('path');

var express = require('express');

var db = require('./config/connection');

var app = express();
var PORT = process.env.PORT || 3001;
var server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  context: authMiddleware
});
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express["static"](path.join(__dirname, '../client/build')));
}

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
}); // Create a new instance of an Apollo server with the GraphQL schema

var startApolloServer = function startApolloServer(typeDefs, resolvers) {
  return regeneratorRuntime.async(function startApolloServer$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(server.start());

        case 2:
          server.applyMiddleware({
            app: app
          });
          db.once('open', function () {
            app.listen(PORT, function () {
              console.log("API server running on port ".concat(PORT, "!"));
              console.log("Use GraphQL at http://localhost:".concat(PORT).concat(server.graphqlPath));
            });
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}; // Call the async function to start the server


startApolloServer(typeDefs, resolvers);