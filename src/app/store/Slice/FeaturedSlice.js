import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getFeatured = createAsyncThunk(
    'featured/getFeatured',
    async () => {
        const response = await fetch('http://localhost:3000/api/featuredJobs');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        return data.data;
    }
);

const initialState = {
    data: [],
    status: 'idle',
    error: null,
};

const featuredSlice = createSlice({
    name: 'featured',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getFeatured.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getFeatured.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(getFeatured.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default featuredSlice.reducer;
