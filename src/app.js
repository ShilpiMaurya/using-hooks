import React, { useState, useEffect, useRef } from "react";
function LearningHooks() {
  const myRef = useRef();
  const [count, setCounter] = useState(0);
  const mouseOverHandler = () => {
    console.log("Hooks: Mouse is over me");
  };
  useEffect(() => {
    console.log`Hook:The button has been clicked ${count} times`;
    document.addEventListener("mouseover", mouseOverHandler);
    return () => {
      document.removeEventListener("mouseover", mouseOverHandler);
    };
  }, [count]);
  return (
    <div ref={myRef}>
      <button
        onClick={() => {
          setCounter(count + 1);
        }}
      >
        Clicked on me {count} times
      </button>
      <br />
      <button
        onClick={() => {
          console.log(myRef.current);
        }}
      >
        Focus
      </button>
    </div>
  );
}
export default LearningHooks;
