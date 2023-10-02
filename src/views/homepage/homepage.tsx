import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "~/modules/counter/slice";
import { RootState } from "~/store";

const Homepage = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state: RootState) => state.counter.value);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1>Counter App</h1>
      <div className="flex items-center mt-4">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <h4 className="text-2xl px-4 py-0">{counterValue}</h4>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Homepage;
