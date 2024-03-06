import { configureStore } from "@reduxjs/toolkit";
import singUpSlice from "./singUpSlice";

const store=configureStore({
    reducer:{
        singUp:singUpSlice
    }
})

export default store