"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = GET;

var _data = require("@/app/api/data.js");

function GET(req) {
  return regeneratorRuntime.async(function GET$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.method !== 'GET')) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", new Response(JSON.stringify({
            status: 404,
            message: 'unauthorized'
          }), {
            status: 404,
            headers: {
              'Content-Type': 'application/json'
            }
          }));

        case 4:
          return _context.abrupt("return", new Response(JSON.stringify({
            status: 200,
            data: _data.data
          }), {
            status: 200,
            headers: {
              'Content-Type': 'application/json'
            }
          }));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}