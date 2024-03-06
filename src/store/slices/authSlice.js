import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

export const postUser=createAsyncThunk("auth/postUser",async(data)=>{
    return await userApi.createUser(data)
})
const authSlice=createSlice({
    name:"auth",
    initialState:{
        dataUser:[]
    },
    extraReducers:(builder)=>{
        builder.addCase(postUser.fulfilled,(state,action)=>{
            state.dataUser=action.payload.data
        })
    }
})

export const authReducer=authSlice.reducer