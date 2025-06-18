import React from "react";
import Accordian from "./accordian";
import { useState } from "react";
const Men = () => {
  const [open, setopen] = useState(false);
  return (
    <div>
      <h1>filter</h1>
      {["Brand", "Mens", "Gender", "Kids"].map((title, index) => (
        <Accordian key={index} title={title} open ={index === open ? true:false }
    setopen={()=> setopen(index)}/>
      ))}
    </div>
  );
};
export default Men;
