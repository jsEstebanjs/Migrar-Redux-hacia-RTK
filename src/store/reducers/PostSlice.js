import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name:"post",
    initialState:{
        posts: [],
        loading: false,
        error: null
    },
    reducers:{
        postLoading:(state,action)=>{
            state.loading = action.payload
        },
        postError:(state,action)=>{
            state.error = action.payload
        },
        postSucces:(state,action)=>{
            state.posts = action.payload
        },

    }
})

export const {postError,postLoading,postSucces} = postSlice.actions;

export default postSlice.reducer;
