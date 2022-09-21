import React, { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(1);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  console.log(12);

  const new_func = () => {
    props.say_hi(props.no);
  };
  return (
    <div>
      <div>{counter}</div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={new_func}>Test</button>
      </div>
    </div>
  );
};

export default Counter;