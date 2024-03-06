import { createSlice } from "@reduxjs/toolkit";

const singSlice=createSlice({
    name:'singUp',
    initialState:{
        userData:{},
        load:false,
        error:''
    },
    reducers:{
        createUser(state,action){
            state.userData=action.payload
            localStorage.setItem('auth',JSON.stringify(state.userData))
        }
    },
    getFromLS(state){
        const user=JSON.parse(localStorage.getItem('auth'))
        if(user){
            state.userData=user
        }
    },
})

export const {createUser,getFromLS}=singSlice.actions
export default singSlice.reducer