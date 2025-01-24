"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = GET;

var _data = require("@/app/api/data.js");

function GET(req) {
  var getRandomItems, randomItems;
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
          getRandomItems = function getRandomItems(arr, num) {
            var result = [];
            var usedIndices = new Set();

            while (result.length < num && result.length < arr.length) {
              var randomIndex = Math.floor(Math.random() * arr.length);

              if (!usedIndices.has(randomIndex)) {
                result.push(arr[randomIndex]);
                usedIndices.add(randomIndex);
              }
            }

            return result;
          };

          randomItems = getRandomItems(_data.data, 9);
          return _context.abrupt("return", new Response(JSON.stringify({
            status: 200,
            data: randomItems
          }), {
            status: 200,
            headers: {
              'Content-Type': 'application/json'
            }
          }));

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}