import React from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
    let totalTasks = useSelector((state)=>state.todo.todoList)

    let completedTask = totalTasks.filter((item)=>item.isCompleted===true)
    let pendingTask = totalTasks.filter((item)=>item.isCompleted!==true)
  return (
    <header className="bg-black p-3 text-white flex items-center justify-around ">
      <div>

        
        <strong>TOTAL:</strong><span className="text-2xl ml-2">{totalTasks?.length }</span>
      </div>
      <div>
        <strong>COMPLETED:</strong><span className="text-2xl ml-2">{completedTask?.length }</span>
      </div>
      <div>
        <strong>PENDING:</strong><span className="text-2xl ml-2">{pendingTask?.length }</span>
      </div>
    </header>
  );
};

export default NavBar;

