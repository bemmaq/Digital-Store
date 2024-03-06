import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getSport=createAsyncThunk('sport/getSport',async()=>{
    const {data}=await axios.get('https://656df576bcc5618d3c244f13.mockapi.io/ap/v1/Shop')
    return data
})

const shopSlice=createSlice({
    name:'sport',
    initialState:{
        sportData:[],
        isLoading:false,
        error:"",
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getSport.pending, (state)=>{
            state.isLoading=true
        })
        .addCase(getSport.fulfilled, (state,action)=>{
            state.isLoading=false
            state.sportData=action.payload
        })
        .addCase(getSport.rejected, (state,{payload}) =>{
            state.isLoading=false
            state.error=payload
        })
    }
})

export default shopSlice.reducer