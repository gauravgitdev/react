import React, { useState, useRef } from 'react';

const Ref = () => {
  const [y, sety] = useState(0);   // useState: changes trigger re-render
  let x = 0;                       // local variable: resets on every render
  const ref = useRef(0);          // useRef: value persists across renders but doesn't cause re-render
  const ref2 = useRef(null) // declaring to acces DOM element
  return (
    <>
      <button
        onClick={() => {
          x = x + 1;
          console.log("x =", x);
        }}
      >
        Increment x (local)
      </button>

      <button
        onClick={() => {
          ref.current = ref.current + 1;
          console.log("ref =", ref.current);
        }}
      >
        Increment ref
      </button>

      <button
        onClick={() => {
          sety(y + 1);
        }}
      >
        Increment y (state)
      </button>

      <h1>State y: {y}</h1>
      <h1>Ref value: {ref.current}</h1>
      <br/>
      <h1>Below is discuss about how to acces DOM</h1>
      <br/>
      
      <br/>
      <input ref = {ref2} type = 'file'></input>
      <button onClick={()=> ref2.current.focus() }></button>
    </>
  );
};

export default Ref;
