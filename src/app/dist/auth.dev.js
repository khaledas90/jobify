"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = exports.signOut = exports.signIn = exports.handlers = void 0;

var _nextAuth = _interopRequireDefault(require("next-auth"));

var _google = _interopRequireDefault(require("next-auth/providers/google"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _NextAuth = (0, _nextAuth["default"])({
  providers: [_google["default"]]
}),
    handlers = _NextAuth.handlers,
    signIn = _NextAuth.signIn,
    signOut = _NextAuth.signOut,
    auth = _NextAuth.auth;

exports.auth = auth;
exports.signOut = signOut;
exports.signIn = signIn;
exports.handlers = handlers;