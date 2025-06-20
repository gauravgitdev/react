import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);

  return (
    <>
      {cartItems.map((item, index) => (
        <div key={index}>
          <div className="product">
            <img className="img_product" src={item.images} alt={item.title} />
            <h2>{item.title}</h2>
            <p>Price: ${item.price}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
