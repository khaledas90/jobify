"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "middleware", {
  enumerable: true,
  get: function get() {
    return _auth.auth;
  }
});
exports.config = void 0;

var _auth = require("./auth.js");

var config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"]
};
exports.config = config;