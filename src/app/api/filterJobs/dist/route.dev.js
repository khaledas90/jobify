"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = GET;

var _data = require("@/app/api/data.js");

function GET(request) {
  var _ref, searchParams, experience, statusJob, type, filteredJobs;

  return regeneratorRuntime.async(function GET$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref = new URL(request.url), searchParams = _ref.searchParams;
          experience = searchParams.get('experience');
          statusJob = searchParams.get('statusJob');
          type = searchParams.get('type');
          filteredJobs = _data.data.filter(function (job) {
            return (experience === 'all' || !experience || job.experience === experience) && (statusJob === 'all' || !statusJob || job.status === statusJob) && (type === 'all' || !type || job.type === type);
          });

          if (filteredJobs) {
            _context.next = 7;
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

        case 7:
          return _context.abrupt("return", new Response(JSON.stringify({
            status: 200,
            data: filteredJobs
          }), {
            status: 200,
            headers: {
              'Content-Type': 'application/json'
            }
          }));

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}