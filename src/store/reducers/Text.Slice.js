import { createSlice } from "@reduxjs/toolkit";

export const inputText = createSlice({
    name:"text",
    initialState:{
        username: ""
    },
    reducers:{
        changeText:(store,action)=>{
            store.username = action.payload
        }

    }
})
export const {changeText} = inputText.actions;

export default inputText.reducer;
