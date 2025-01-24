import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FilterJobs = createAsyncThunk("jobs/filterAll", async ({ experience, statusJob, type }, thunkAPI) => {
    console.log("Filters applied:", experience, statusJob, type);
    try {
        const queryParams = new URLSearchParams({
            experience: experience === 'All' ? '' : experience,
            statusJob: statusJob === 'All' ? '' : statusJob,
            type: type === 'All' ? '' : type,
        }).toString();

        const response = await fetch(`http://localhost:3000/api/filterJobs?${queryParams}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
      console.log(data.data);
      
        return data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message); 
    }
});

const initialState = {
    data: [],
    status: 'idle',
    error: null,
};

const FilterJobsSlice = createSlice({
    name: 'filterJobs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(FilterJobs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(FilterJobs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload; 
            })
            .addCase(FilterJobs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || action.error.message; 
            });
    },
});

export default FilterJobsSlice.reducer;
