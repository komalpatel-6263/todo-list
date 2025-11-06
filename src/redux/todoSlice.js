import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    todoList:[],
    isloading:true,
    selectedTodo: null,

};

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{

    }
})

// export const {} = todoSlice.actions

export default  todoSlice;