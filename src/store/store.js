import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/CountSlice";
import  inputText  from "./reducers/Text.Slice";
import postSlice from "./reducers/PostSlice";

export const store = configureStore({
  reducer:{
    count:countReducer,
    text:inputText,
    post:postSlice
  }
})
