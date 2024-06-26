"use client"

import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
res: null,
    isLoading: false,
    isError: false,
    error:null
};


export const createUser = createAsyncThunk("user", async (formData:any, { rejectWithValue }) => {
    try {
            
        const response = await fetch("/api/user/create-user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

       

        const data = await response.json();
        return data;
    } catch (error:any) {
        return rejectWithValue(error.message);
    }
});
const expenseSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });

        builder.addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;

            if(action.payload.error){
                state.isError=true
                state.error=action.payload.error
                return
            }
            state.res = action.payload;
            console.log(action.payload)
            if(action.payload.token){
                localStorage.setItem('bagwise_token',action.payload.token)
               }
        });

        builder.addCase(createUser.rejected, (state, action:any) => {
            state.isLoading = false;
            state.isError = true;
            console.log(action.payload)

            state.error= action.error
        });

    },
});

export default expenseSlice.reducer;