"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _CategorySlice = _interopRequireDefault(require("@/app/store/Slice/CategorySlice"));

var _FeaturedSlice = _interopRequireDefault(require("@/app/store/Slice/FeaturedSlice"));

var _JobsSlice = _interopRequireDefault(require("@/app/store/Slice/JobsSlice"));

var _AllJobSlice = _interopRequireDefault(require("@/app/store/Slice/AllJobSlice"));

var _testimonialSlice = _interopRequireDefault(require("@/app/store/Slice/testimonialSlice"));

var _JobIdSlice = _interopRequireDefault(require("@/app/store/Slice/JobIdSlice"));

var _FilterJobSlice = _interopRequireDefault(require("@/app/store/Slice/FilterJobSlice"));

var _SearchJobSlice = _interopRequireDefault(require("@/app/store/Slice/SearchJobSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _redux.combineReducers)({
  category: _CategorySlice["default"],
  featured: _FeaturedSlice["default"],
  jobs: _JobsSlice["default"],
  jobId: _JobIdSlice["default"],
  allJobs: _AllJobSlice["default"],
  testimonials: _testimonialSlice["default"],
  filterJobs: _FilterJobSlice["default"],
  searchJobs: _SearchJobSlice["default"]
});
var _default = rootReducer;
exports["default"] = _default;