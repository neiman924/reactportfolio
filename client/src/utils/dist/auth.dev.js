"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AuthService =
/*#__PURE__*/
function () {
  function AuthService() {
    _classCallCheck(this, AuthService);
  }

  _createClass(AuthService, [{
    key: "getProfile",
    value: function getProfile() {
      //console.log(decode(this.getToken()));
      return (0, _jwtDecode["default"])(this.getToken());
    }
  }, {
    key: "loggedIn",
    value: function loggedIn() {
      var token = this.getToken(); // If there is a token and it's not expired, return `true`

      return token && !this.isTokenExpired(token) ? true : false;
    }
  }, {
    key: "isTokenExpired",
    value: function isTokenExpired(token) {
      // Decode the token to get its expiration time that was set by the server
      var decoded = (0, _jwtDecode["default"])(token); // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`

      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem('id_token');
        return true;
      } // If token hasn't passed its expiration time, return `false`


      return false;
    }
  }, {
    key: "getToken",
    value: function getToken() {
      return localStorage.getItem('id_token', 'permission');
    }
  }, {
    key: "login",
    value: function login(idToken, permission) {
      localStorage.setItem('id_token', idToken);
      localStorage.setItem('permission', permission);
      window.location.assign('/');
    }
  }, {
    key: "logout",
    value: function logout() {
      localStorage.removeItem('id_token');
      window.location.reload('/');
    }
  }]);

  return AuthService;
}();

var _default = new AuthService();

exports["default"] = _default;