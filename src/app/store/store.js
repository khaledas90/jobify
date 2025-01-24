import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Slice/index'; 

const store = configureStore({
    reducer: rootReducer,
});

export default store;