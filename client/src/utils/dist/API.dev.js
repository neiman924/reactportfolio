"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchGoogleBooks = exports.saveComment = exports.loginUser = exports.createUser = exports.getMe = void 0;

// route to get logged in user's info (needs the token)
var getMe = function getMe(token) {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: "Bearer ".concat(token)
    }
  });
};

exports.getMe = getMe;

var createUser = function createUser(userData) {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
};

exports.createUser = createUser;

var loginUser = function loginUser(userData) {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
}; // save book data for a logged in user


exports.loginUser = loginUser;

var saveComment = function saveComment(comment, token) {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  });
}; // make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter


exports.saveComment = saveComment;

var searchGoogleBooks = function searchGoogleBooks(query) {
  return fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(query));
};

exports.searchGoogleBooks = searchGoogleBooks;