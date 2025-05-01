import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "../redux/todoSlice";

function TodoApp() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() != "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1>TodoApp</h1>
        <div className="flex items-center justify-between gap-4">
          <input
            className="border px-2 py-2 rounded-xl"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your job ..."
          ></input>
          <button
            className="bg-green-400 text-white rounded-xl"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center">
        {todos.map((job) => (
          <li
            key={job.id}
            className="flex items-center justify-between gap-4 mt-3"
          >
            <span
              onClick={() => dispatch(toggleTodo(job.id))}
              className={`cursor-pointer ${
                job.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {job.text}
            </span>
            <button
              onClick={() => dispatch(removeTodo(job.id))}
              className="bg-red-500 text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
