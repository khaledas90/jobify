"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadUsers = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var usersFilePath = _path["default"].resolve('/users.json');

var loadUsers = function loadUsers() {
  try {
    var data = _fs["default"].readFileSync(usersFilePath, 'utf8');

    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading users.json:', err);
    return [];
  }
};

exports.loadUsers = loadUsers;