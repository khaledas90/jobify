import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";


export const getTestimonials = createAsyncThunk("Testimonials/getTestimonials", async(  )=>{
    const response = await fetch(`http://localhost:3000/api/testimonials`);
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



const TestimonialsSlice = createSlice({
    name: 'testimonials',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTestimonials.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getTestimonials.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(getTestimonials.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
})

export default TestimonialsSlice.reducer;