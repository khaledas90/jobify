"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logout = exports.checkUserLoggedIn = exports.Login = exports.RegisterUser = void 0;

var _auth = require("firebase/auth");

var _firebase = require("@/app/utils/firebase");

var _firestore = require("firebase/firestore");

var _reactHotToast = _interopRequireDefault(require("react-hot-toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RegisterUser = function RegisterUser(email, password) {
  var additionalData,
      userCredential,
      user,
      userDocRef,
      _args = arguments;
  return regeneratorRuntime.async(function RegisterUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          additionalData = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap((0, _auth.createUserWithEmailAndPassword)(_firebase.auth, email, password));

        case 4:
          userCredential = _context.sent;
          user = userCredential.user;
          userDocRef = (0, _firestore.doc)(_firebase.db, "users", user.uid);
          _context.next = 9;
          return regeneratorRuntime.awrap((0, _firestore.setDoc)(userDocRef, {
            email: user.email,
            uid: user.uid,
            name: additionalData.name || "",
            phone: additionalData.phone || "",
            address: additionalData.address || ""
          }));

        case 9:
          _reactHotToast["default"].success("Registration successful!");

          return _context.abrupt("return", user);

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](1);

          if (!(_context.t0.code === 'auth/email-already-in-use')) {
            _context.next = 21;
            break;
          }

          console.error("This email is already registered.");

          _reactHotToast["default"].error("This email is already registered. Please try logging in.");

          throw new Error("This email is already registered. Please try logging in.");

        case 21:
          console.error("Registration error:", _context.t0.message);

          _reactHotToast["default"].error("Registration failed. Please try again later.");

          throw _context.t0;

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 13]]);
};

exports.RegisterUser = RegisterUser;

var Login = function Login(email, password) {
  var loginUser;
  return regeneratorRuntime.async(function Login$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap((0, _auth.signInWithEmailAndPassword)(_firebase.auth, email, password));

        case 3:
          loginUser = _context2.sent;
          console.log("Login successful:", loginUser.user);

          _reactHotToast["default"].success("Login successful!");

          return _context2.abrupt("return", loginUser.user);

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);

          if (!(_context2.t0.code === 'auth/user-not-found')) {
            _context2.next = 17;
            break;
          }

          console.error("No user found with this email.");

          _reactHotToast["default"].error("No user found with this email. Please register first.");

          throw new Error("No user found with this email. Please register first.");

        case 17:
          if (!(_context2.t0.code === 'auth/wrong-password')) {
            _context2.next = 23;
            break;
          }

          console.error("Incorrect password.");

          _reactHotToast["default"].error("Incorrect password. Please try again.");

          throw new Error("Incorrect password. Please try again.");

        case 23:
          if (!(_context2.t0.code === 'auth/invalid-email')) {
            _context2.next = 29;
            break;
          }

          console.error("Invalid email format.");

          _reactHotToast["default"].error("Invalid email format. Please enter a valid email.");

          throw new Error("Invalid email format. Please enter a valid email.");

        case 29:
          console.error("Login error:", _context2.t0.message);

          _reactHotToast["default"].error("Login failed. Please try again later.");

          throw new Error("Login failed. Please try again later.");

        case 32:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

exports.Login = Login;

var checkUserLoggedIn = function checkUserLoggedIn(callback) {
  (0, _auth.onAuthStateChanged)(_firebase.auth, function (user) {
    if (user) {
      console.log('User is logged in:', user);
      callback(true, user);
    } else {
      console.log('No user is logged in.');
      callback(false, null);
    }
  });
};

exports.checkUserLoggedIn = checkUserLoggedIn;

var Logout = function Logout() {
  return regeneratorRuntime.async(function Logout$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap((0, _auth.signOut)(_firebase.auth));

        case 3:
          console.log("Logout successful");

          _reactHotToast["default"].success("You have been logged out successfully.");

          _context3.next = 11;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.error("Logout error:", _context3.t0.message);

          _reactHotToast["default"].error("Logout failed. Please try again.");

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.Logout = Logout;