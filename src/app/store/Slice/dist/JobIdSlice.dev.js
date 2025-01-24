"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getJobId = void 0;

var _toolkit = require("@reduxjs/toolkit");

var getJobId = (0, _toolkit.createAsyncThunk)("category/getJobs", function _callee(jobId, thunkAPI) {
  var response, data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("http://localhost:3000/api/jobs/".concat(jobId)));

        case 2:
          response = _context.sent;

          if (response.ok) {
            _context.next = 5;
            break;
          }

          throw new Error("Network response was not ok");

        case 5:
          _context.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context.sent;
          return _context.abrupt("return", data.data);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.getJobId = getJobId;
var initialState = {
  data: [],
  status: 'idle',
  error: null
};
var jobIDSlice = (0, _toolkit.createSlice)({
  name: 'jobId',
  initialState: initialState,
  reducers: {},
  extraReducers: function extraReducers(builder) {
    builder.addCase(getJobId.pending, function (state) {
      state.status = 'loading';
    }).addCase(getJobId.fulfilled, function (state, action) {
      state.status = 'succeeded';
      state.data = action.payload;
    }).addCase(getJobId.rejected, function (state, action) {
      state.status = 'failed';
      state.error = action.error.message;
    });
  }
});
var _default = jobIDSlice.reducer;
exports["default"] = _default;