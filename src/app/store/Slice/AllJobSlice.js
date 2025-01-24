import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getAllJobs = createAsyncThunk("jobs/getAll", async () => {
    const response = await fetch(`http://localhost:3000/api/jobs`);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data; 
});





const initialState = {
    data: [],
    status: 'idle', 
    error: null,
};


const AllJobsSlice = createSlice({
    name: 'allJobs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
        builder
            .addCase(getAllJobs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllJobs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload; 
            })
            .addCase(getAllJobs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message; 
            })
    },
});

export default AllJobsSlice.reducer;
