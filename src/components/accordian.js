import ListItems from "./Listitems";
import react from 'react'
import {useState} from 'react'
const Accordian = ({title,open,setopen}) => {
    
return (
     <>
     <h1>Gender</h1>
    <button onClick={() => setopen(!open)}
      style={{
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px"
  }}  >show</button>
    {open && <ListItems/>}

    </>
)
}
export default Accordian;