
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const getCategory = createAsyncThunk(
    'category/getCategory',
    async () => {
        const response = await fetch('http://localhost:3000/api/category');
           if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data;
    }
)



const initialState = {
    data: [],
    status: 'idle', 
    error: null,
};



const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
     
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

// export const {  } = exampleSlice.actions;
export default categorySlice.reducer;
