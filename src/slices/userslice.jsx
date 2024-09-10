import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
export const userlogin=createAsyncThunk('loginuser',async(cred,thunkapi)=>
{
    let response=await axios.post('./user/login',cred)
    let data=response.data
    if(data.message==='login success')
    {
        localStorage.setItem('token',data.payload);
        return data.userobj;
    }
    if(data.message==='the username is invalid' || data.message==='invalid password')
    {
        return thunkapi.rejectWithValue(data.message)
    }
})


let userslice=createSlice({
    name:'user',
    initialState:{
        userobj:{},
        isloading:false,
        issuccess:false,
        iserror:false,
        errmsg:''
    },
    reducers:{},
    extrareducers:{
        [userlogin.pending]:(state,action)=>{
            state.isloading=true
    },
    [userlogin.fulfilled]:(state,action)=>{
        state.isloading=false,
        state.issuccess=true,
        state.userobj=action.payload,
        state.iserror=false
    },
    [userlogin.rejected]:(state,action)=>{
        state.isloading=false,
        state.iserror=true,
        state.errmsg=action.payload.message
    }
}})
export const {}= userslice.actions;
export default userslice.reducer;