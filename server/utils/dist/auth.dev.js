"use strict";

// const withAuth = (req, res, next) => {
//   // If the user is not logged in, redirect the request to the login route
//   if (!req.session.logged_in) {
//     res.redirect('/login');
//   } else {
//     next();
//   }
// };
// 
// module.exports = withAuth;
var jwt = require('jsonwebtoken');

var secret = 'mysecretssshhhhhhh';
var expiration = '2h';
module.exports = {
  authMiddleware: function authMiddleware(_ref) {
    var req = _ref.req;
    var token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      var _jwt$verify = jwt.verify(token, secret, {
        maxAge: expiration
      }),
          data = _jwt$verify.data;

      req.user = data;
    } catch (_unused) {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function signToken(_ref2) {
    var email = _ref2.email,
        name = _ref2.name,
        _id = _ref2._id,
        permission = _ref2.permission;
    var payload = {
      email: email,
      name: name,
      _id: _id,
      permission: permission
    };
    return jwt.sign({
      data: payload
    }, secret, {
      expiresIn: expiration
    });
  }
};