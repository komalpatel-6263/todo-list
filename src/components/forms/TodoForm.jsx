import React, { useState, useRef } from "react";
import "./todoForm.css";
import { addTaskToTodoList } from "../../redux/todo/todoSlice";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const taskInputRef = useRef();
  function handleForm(e) {
    e.preventDefault();
    console.log("task", task);

    let data = {
      id: Date.now(),
      taskName: task,
      isCompleted: false,
      createdAt: new Date().toDateString(),
    };

    dispatch(addTaskToTodoList(data));

    setTask("");
    taskInputRef.current.value = "";
  }
  return (
    <>
      <div className="container">
        <div className="heading">TODOS</div>
        <p className="text-center text-pink-600">track your daily tasks</p>
        <form onSubmit={handleForm} className="form">
          <input
            ref={taskInputRef}
            required=""
            className="input"
            type="text"
            onChange={(e) => {
              setTask(e.target.value);
            }}
            name="taskName"
            id="taskName"
            placeholder="Enter a Task"
          />

          <button className="login-button  items-center gap-2">
            <svg
            
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Add Task
          </button>


        </form>
        <div className="social-account-container"></div>
        <span className="agreement">
          <a href="#">Learn user licence agreement</a>
        </span>
      </div>
    </>
  );
};

export default TodoForm;

