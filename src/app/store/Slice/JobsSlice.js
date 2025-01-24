import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";


export const getJobs = createAsyncThunk("category/getJobs", async( jobName , _ )=>{
    const response = await fetch(`http://localhost:3000/api/SpecificJobs?jobName=${jobName}`);
    if(!response.ok){
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data

})


const initialState = {
    data: [],
    status: 'idle',
    error: null,
};



const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getJobs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getJobs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(getJobs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
})

export default jobsSlice.reducer;