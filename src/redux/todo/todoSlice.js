import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  todoList: [],
  isloading: true,
  selectedTodo: null,
  editFormOpen: false,
};



const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTaskToTodoList: (state, action) => {
      state.todoList.push(action.payload);
      toast.success("task added!");
    },
    deleteTask: (state, action) => {
      state.todoList = state.todoList.filter((item) => {
        return item.id !== action.payload;
      });
    },
    markTaskDone: (state, action) => {
      let idx = state.todoList.findIndex((task) => {
        return task.id === action.payload;
      });
      console.log("item index is ", idx);
      if (idx >= 0) {
        if (state.todoList[idx].isCompleted) {
          state.todoList[idx].isCompleted = false;
        } else {
          state.todoList[idx].isCompleted = true;
        }
      }
      // state.todoList;
    },
    openEditForm: (state) => {
      state.editFormOpen = true;
    },
    closeEditForm: (state) => {
      state.editFormOpen = false;
      state.selectedTodo = null;
    },
    setSelectedTodo: (state, action) => {
      state.selectedTodo = action.payload;
    },
    updateTask: (state, action) => {
      let idx = state.todoList.findIndex((item) => {
        return item.id === state.selectedTodo.id;
      });
      console.log("found index",idx)
      state.todoList[idx].taskName = action.payload.taskName;
      state.todoList[idx].updatedAt = action.payload.updatedAt;
      toast.success("task edited successfully !");
      state.editFormOpen = false;
      state.selectedTodo = null
    },
  },
});

export const {
  addTaskToTodoList,
  deleteTask,
  markTaskDone,
  openEditForm,
  closeEditForm,
  setSelectedTodo,
  updateTask
} = todoSlice.actions;

export default todoSlice.reducer;

