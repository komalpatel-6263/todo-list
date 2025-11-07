import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: null,
  date: null,
  expired: true,
};



const subscriptionSlice = createSlice({
  name: "subs",
  initialState,
  reducers: {},
});

export default subscriptionSlice.reducer;

