import { combineReducers } from 'redux';
import categorySlice from '@/app/store/Slice/CategorySlice';
import featuredSlice from '@/app/store/Slice/FeaturedSlice';
import jobsSlice from '@/app/store/Slice/JobsSlice';
import AllJobsSlice from '@/app/store/Slice/AllJobSlice';
import TestimonialsSlice from '@/app/store/Slice/testimonialSlice';
import jobIDSlice from '@/app/store/Slice/JobIdSlice';
import FilterJobsSlice from '@/app/store/Slice/FilterJobSlice';
import SearchJobSlice from '@/app/store/Slice/SearchJobSlice';
const rootReducer = combineReducers({
    category: categorySlice,
    featured: featuredSlice,
    jobs: jobsSlice,
    jobId: jobIDSlice,
    allJobs: AllJobsSlice,
    testimonials: TestimonialsSlice,
    filterJobs: FilterJobsSlice,
    searchJobs: SearchJobSlice
});

export default rootReducer;