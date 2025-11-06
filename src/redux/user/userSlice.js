import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  isLoggedIn: false,
  userDetails: null,
  isLoading: true,
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeLoader:(state,action)=>{
      state.isLoading = false
    },
    setUserDetails:(state,action)=>{
      state.userDetails = action.payload.data
    } 
  },
});

export const {removeLoader,setUserDetails}  = userSlice.actions



export default userSlice.reducer;


