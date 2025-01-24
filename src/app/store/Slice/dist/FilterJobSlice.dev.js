"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FilterJobs = void 0;

var _toolkit = require("@reduxjs/toolkit");

var FilterJobs = (0, _toolkit.createAsyncThunk)("jobs/filterAll", function _callee(_ref, thunkAPI) {
  var experience, statusJob, type, queryParams, response, data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          experience = _ref.experience, statusJob = _ref.statusJob, type = _ref.type;
          console.log("Filters applied:", experience, statusJob, type);
          _context.prev = 2;
          queryParams = new URLSearchParams({
            experience: experience === 'All' ? '' : experience,
            statusJob: statusJob === 'All' ? '' : statusJob,
            type: type === 'All' ? '' : type
          }).toString();
          _context.next = 6;
          return regeneratorRuntime.awrap(fetch("http://localhost:3000/api/filterJobs?".concat(queryParams)));

        case 6:
          response = _context.sent;

          if (response.ok) {
            _context.next = 9;
            break;
          }

          throw new Error("Network response was not ok");

        case 9:
          _context.next = 11;
          return regeneratorRuntime.awrap(response.json());

        case 11:
          data = _context.sent;
          console.log(data.data);
          return _context.abrupt("return", data.data);

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](2);
          return _context.abrupt("return", thunkAPI.rejectWithValue(_context.t0.message));

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 16]]);
});
exports.FilterJobs = FilterJobs;
var initialState = {
  data: [],
  status: 'idle',
  error: null
};
var FilterJobsSlice = (0, _toolkit.createSlice)({
  name: 'filterJobs',
  initialState: initialState,
  reducers: {},
  extraReducers: function extraReducers(builder) {
    builder.addCase(FilterJobs.pending, function (state) {
      state.status = 'loading';
    }).addCase(FilterJobs.fulfilled, function (state, action) {
      state.status = 'succeeded';
      state.data = action.payload;
    }).addCase(FilterJobs.rejected, function (state, action) {
      state.status = 'failed';
      state.error = action.payload || action.error.message;
    });
  }
});
var _default = FilterJobsSlice.reducer;
exports["default"] = _default;