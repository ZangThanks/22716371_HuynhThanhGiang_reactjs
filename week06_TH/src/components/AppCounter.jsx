import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

function AppCounter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl mb-4">Counter: {count}</h1>
      <div className="flex gap-4">
        <button
          className="bg-blue-500 text-white rounded-md"
          onClick={() => dispatch(increment())}
        >
          Tăng
        </button>
        <button
          className="bg-red-500 text-white rounded-md"
          onClick={() => dispatch(decrement())}
        >
          Giảm
        </button>
      </div>
    </div>
  );
}

export default AppCounter;
