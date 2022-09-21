import { createSlice } from "@reduxjs/toolkit";

export const countReducer = createSlice({
    name:"Count",
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count += 1
        },
        decrement:(state)=>{
            state.count -= 1
        }

    }
})
export const {increment,decrement} = countReducer.actions;

export default countReducer.reducer;
