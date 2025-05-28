import "./Increment.css";
import React, { useState } from "react";
function Increment() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);
  };

  const Reset = () => {
    setCount(count * 0);
  };

  return (
    <>
      <h1>Using Hook (useState)</h1>
      <p>Number : {count}</p>
      <button className="btn" onClick={Decrement}>
        Decrement
      </button>
      <button className="btn" onClick={Reset}>
        Reset
      </button>
      <button className="btn" onClick={Increment}>
        Increment
      </button>
    </>
  );
}
export default Increment;
