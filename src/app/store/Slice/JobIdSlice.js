import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";


export const getJobId = createAsyncThunk("category/getJobs", async( jobId , thunkAPI )=>{
    const response = await fetch(`http://localhost:3000/api/jobs/${jobId}`);
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



const jobIDSlice = createSlice({
    name: 'jobId',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getJobId.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getJobId.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(getJobId.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
})



export default jobIDSlice.reducer;