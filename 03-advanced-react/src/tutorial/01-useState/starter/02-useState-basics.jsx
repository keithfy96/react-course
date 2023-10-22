import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState(1));
  const state = useState(0);
  const count = state[0];
  const setCount = state[1];

  // const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>
        click me
      </button>
    </div>
  );
};

export default UseStateBasics;
