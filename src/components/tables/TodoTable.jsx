import React from "react";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, markTaskDone, openEditForm, setSelectedTodo } from "../../redux/todo/todoSlice";
import { BiCross } from "react-icons/bi";
import EditTodoForm from "../forms/EditTodoForm";

export default function TodoTable({  onDelete, onComplete }) {
  let dispatch = useDispatch();
  let todos = useSelector((state) => state.todo.todoList);
  let open= useSelector((s)=>s.todo.editFormOpen)

  function handleDeleteTask(id) {
    console.log("id is ", id);
    let ask = confirm("are you sure to delete this task?");
    console.log("ask", ask);
    if (!ask) {
      alert("delete aborted!");
      return;
    } else {
      dispatch(deleteTask(id));
    }
  }
  function handleTaskCompleted(id) {
    console.log("id is ", id);
    let ask = confirm("are you sure to mark as complete this task?");
    console.log("ask", ask);
    if (!ask) {
      alert("aborted!");
      return;
    } else {
      dispatch(markTaskDone(id));
    }
  }

  function onEdit(todo){
    dispatch(setSelectedTodo(todo))
    dispatch(openEditForm())
    console.log("before",open)
    // open = true
    console.log("changed",open)
  }

  return (
    <>
      <div className="p-6 bg-[#d1e6ff] min-h-screen flex justify-center items-start">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[rgb(16,137,211)] to-[rgb(18,177,209)] text-white text-lg font-semibold py-3 px-5">
            Todo List
          </div>

          {/* Table */}
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#f3f9ff] text-gray-700 text-left">
                <th className="py-3 px-4 font-medium">#</th>
                <th className="py-3 px-4 font-medium">Task</th>
                <th className="py-3 px-4 font-medium">Created At</th>
                <th className="py-3 px-4 font-medium">Status</th>
                <th className="py-3 px-4 font-medium text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {todos?.length > 0 ? (
                todos.map((todo, index) => (
                  <tr
                    id={todo.id}
                    key={todo.id}
                    className={`border-t transition-all ${
                      todo.isCompleted
                        ? "bg-green-50 text-gray-500"
                        : "hover:bg-[#eef7ff]"
                    }`}
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td
                      className={`py-3 px-4 ${
                        todo.isCompleted ? "line-through" : ""
                      }`}

                      
                    >
                      {todo.taskName}
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {todo.createdAt}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          todo.isCompleted
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {todo.isCompleted ? "Completed" : "Pending"}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-3 px-4 text-right space-x-3">
                      <button
                        onClick={() => onEdit(todo)}
                        className="text-blue-500 hover:text-blue-700 transition"
                        title="Edit"
                      >


                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDeleteTask(todo.id)}
                        className="text-red-500 hover:text-red-700 transition"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>

                      <button
                        onClick={() => handleTaskCompleted(todo.id)}
                        className="text-green-500 hover:text-green-700 transition"
                        title="Mark Complete"
                      >


                        {todo.isCompleted ? (
                          <BiCross color="red" />
                        ) : (
                          <FaCheck />
                        )}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500 italic"
                  >
                    No todos found. Add some tasks!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>


      </div>

      {/* edit form modal */}
     {open && <div className="h-screen w-screen flex items-center justify-center bg-black/50 fixed top-0 left-0">
        <EditTodoForm />
      </div>}
    </>


  );
}