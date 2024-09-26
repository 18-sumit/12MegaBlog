import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status : false,
    userData : null ,


}


const authSlice = createSlice({
    name :"auth",
    initialState,
    reducers:{ 
        // iske andar ye functionalities ko actions bolte hai

        login : (state , action) => {
            state.status = true;
            state.userData  = action.payload.userData; // yaha se  data fetch hoga
        },
        logout : (state ,  action) => { // action ki jarurat nahi h par likh skte hai
            state.status = false;
            state.userData = null
        },
    }
})

export const {login , logout} = authSlice.actions; // yaha se wo functionalities export ho rahi hai . 

export default  authSlice.reducer; // aur yaha se pura reducer 
