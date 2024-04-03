import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: {},
    allUserData:{}
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.user;
            state.allUserData=action.payload.alluser;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
            state.allUserData=null;
        }
     }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;