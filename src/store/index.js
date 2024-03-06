import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./shopSlice";
import { authReducer } from "./slices/authSlice";
import { cardReducer } from "./card/reducer";


const store=configureStore({
    reducer:{

        sport:shopSlice,
        auth:authReducer,
        card:cardReducer,

    }
})

export default store