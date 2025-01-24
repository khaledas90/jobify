"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SearchJobs = void 0;

var _toolkit = require("@reduxjs/toolkit");

var SearchJobs = (0, _toolkit.createAsyncThunk)("jobs/searchJobs", function _callee(search, thunkAPI) {
  var response, data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("Filters applied:", search);
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch("http://localhost:3000/api/searchJobs?Search=".concat(search)));

        case 4:
          response = _context.sent;

          if (response.ok) {
            _context.next = 7;
            break;
          }

          throw new Error("Network response was not ok");

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(response.json());

        case 9:
          data = _context.sent;
          console.log(data.data);
          return _context.abrupt("return", data.data);

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", thunkAPI.rejectWithValue(_context.t0.message));

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 14]]);
});
exports.SearchJobs = SearchJobs;
var initialState = {
  data: [],
  status: 'idle',
  error: null
};
var SearchJobSlice = (0, _toolkit.createSlice)({
  name: 'searchJobs',
  initialState: initialState,
  reducers: {},
  extraReducers: function extraReducers(builder) {
    builder.addCase(SearchJobs.pending, function (state) {
      state.status = 'loading';
    }).addCase(SearchJobs.fulfilled, function (state, action) {
      state.status = 'succeeded';
      state.data = action.payload;
    }).addCase(SearchJobs.rejected, function (state, action) {
      state.status = 'failed';
      state.error = action.payload || action.error.message;
    });
  }
});
var _default = SearchJobSlice.reducer;
exports["default"] = _default;