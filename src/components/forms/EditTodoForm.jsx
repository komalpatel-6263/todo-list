import { useState, useRef } from "react";
import "./todoForm.css";
import {  closeEditForm, updateTask } from "../../redux/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseCircle } from "react-icons/io5";

const EditTodoForm = () => {
  const dispatch = useDispatch();
  const selectedTask = useSelector((state)=>state.todo.selectedTodo)
  console.log(selectedTask,"selected")
  const [task, setTask] = useState(selectedTask?.taskName);
  const taskInputRef = useRef();

  function closeForm() {
    dispatch(closeEditForm());
  }

  function handleForm(e) {
    e.preventDefault();
    console.log("task", task);

    let data = {
      taskName: task,
      updatedAt: new Date().toLocaleDateString(),
    };

    dispatch(updateTask(data))

    console.log(data);

    // edit reducre call
    // dispatch();

    // setTask("");
    // taskInputRef.current.value = "";
  }
  return (
    <>
      <div className="container relative">
        <IoCloseCircle
          onClick={closeForm}
          className="absolute top-4 right-4 hover:font-red-200 cursor-pointer"
          size={32}
          color="red"
        />
        <div className="heading">Edit TODOS</div>
        <p className="text-center text-pink-600">Edit your tasks</p>
        <form onSubmit={handleForm} className="form">
          <input
            ref={taskInputRef}
            
            required=""
            defaultValue={selectedTask?.taskName}
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
            Save Task
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

export default EditTodoForm;


