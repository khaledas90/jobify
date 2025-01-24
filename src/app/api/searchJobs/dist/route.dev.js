"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = GET;

var _data = require("@/app/api/data.js");

function GET(request) {
  var _ref, searchParams, Search, filteredJobs;

  return regeneratorRuntime.async(function GET$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref = new URL(request.url), searchParams = _ref.searchParams;
          Search = searchParams.get('Search');
          filteredJobs = _data.data.filter(function (job) {
            return job.name.toLowerCase().includes(Search.toLowerCase()) || job.type.toLowerCase().includes(Search.toLowerCase());
          });

          if (filteredJobs) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", new Response(JSON.stringify({
            status: 404,
            message: 'Job not found'
          }), {
            status: 404,
            headers: {
              'Content-Type': 'application/json'
            }
          }));

        case 5:
          return _context.abrupt("return", new Response(JSON.stringify({
            status: 200,
            data: filteredJobs
          }), {
            status: 200,
            headers: {
              'Content-Type': 'application/json'
            }
          }));

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}