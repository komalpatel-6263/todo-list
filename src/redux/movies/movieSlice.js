import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  allMovies: [],
  selectedMovie: null,
};

// syntax
// let sliceName = createSlice({
//   //name:"your slice display name" //String,
//   //initial:{
//   // state1:defaultvalue
//   // state2:defaultValue
//   // } //Object
//   //   ,
//   // reducers:{}//object ===> reducer functions
//   //extraReducers ===> handle async function operations
// });

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
//   extraReducers: {},
});

export default movieSlice.reducer;

