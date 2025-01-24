import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const SearchJobs = createAsyncThunk("jobs/searchJobs", async (search, thunkAPI) => {
    console.log("Filters applied:", search);
    try {
        const response = await fetch(`http://localhost:3000/api/searchJobs?Search=${search}`);
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

const SearchJobSlice = createSlice({
    name: 'searchJobs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(SearchJobs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(SearchJobs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload; 
            })
            .addCase(SearchJobs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || action.error.message; 
            });
    },
});

export default SearchJobSlice.reducer;
