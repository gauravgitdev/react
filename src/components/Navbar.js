import { useState,useEffect, use} from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
const Navbar = () => {

  // 1st case: []-> empty array dependencies -> only once called when navbar render
  // 2nd case:-> No array dependency -> jab jab navbar render hoga tab tab apna UseEffect call hoga
  // 3rd case:->jab ham array dependency ke andar kuch pass karte hai tooh voo change hota hain toh render hota hain
  // we alway use hook without any condition like we can not use hook inside loop or cinditional statement 
  // it behave inconsistansionaly
  useEffect(()=>{
    console.log("dijcn");
    
  },[])
  const [btnName,setbtnName]  = useState("Light")
  const cartItems = useSelector((store)=>store.cart.cartItems)
  return (
    

    
    
    <div className='navbar'>
      <h1>Logo</h1>
      <ul className='menu-items'>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/Men">MEN</Link></li>
        <li><Link to="/kid">Kid</Link></li>
         <li><Link to="/about">ABOUT</Link></li>
           <li><Link to="/grocery">grocery</Link></li>
            <li><Link to="/memo">Memo</Link></li>
        <li><Link to="/cart">Cart={cartItems.length}</Link></li>
        <button onClick={()=>{
          btnName === "Light"?setbtnName("Dark"):setbtnName("Light")
        }}>{btnName}</button>
      </ul>
      
      
    </div>
  );
};
export default Navbar; //default export of Navbar component