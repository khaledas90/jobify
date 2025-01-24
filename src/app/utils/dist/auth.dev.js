"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logout = exports.checkUserAuth = void 0;

var _auth = require("firebase/auth");

var _firebase = require("../utils/firebase");

var checkUserAuth = function checkUserAuth(callback) {
  (0, _auth.onAuthStateChanged)(_firebase.auth, function (user) {
    if (user) {
      console.log("User is signed in:", user);
      callback(user);
    } else {
      console.log("No user is signed in.");
      callback(null);
    }
  });
};

exports.checkUserAuth = checkUserAuth;

var Logout = function Logout() {
  return regeneratorRuntime.async(function Logout$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _auth.signOut)(_firebase.auth));

        case 3:
          console.log("Logout successful");
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error("Logout error:", _context.t0.message);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

exports.Logout = Logout;