import { useState } from "react";
const Navbar = () => {
  const [btnName,setbtnName]  = useState("Light")
  return (
    <div className='navbar'>
      <h1>Logo</h1>
      <ul className='menu-items'>
        <li>Home</li>
        <li>Woman</li>
        <li>Kids</li>
        <li>Cart</li>
        <button onClick={()=>{
          btnName === "Light"?setbtnName("Dark"):setbtnName("Light")
        }}>{btnName}</button>
      </ul>
    </div>
  );
};
export default Navbar; //default export of Navbar component