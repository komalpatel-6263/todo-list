import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "./movies/movieSlice";
import UserReducer from "./user/userSlice";
import SubsReducer from "./subscriptionSlice";
import TodoReducer from "./todo/todoSlice";



const store = configureStore({
  reducer: {
    movies: MovieReducer,
    user: UserReducer,
    subscription: SubsReducer,
    todo: TodoReducer,
  }
  
});

export default store;

