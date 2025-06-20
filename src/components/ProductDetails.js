import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useGetSingleProduct from "../hook/useGetSingleProduct";
import { addItems } from "../store/cartSlice";
import { useDispatch } from "react-redux";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const singleproduct = useGetSingleProduct(productId);
  // const [singleproduct,setsingleproduct] = useState(null);
  // const {productId} = useParams();

  //      useEffect(()=>{
  //      fetchData();

  //      },[]);

  //      const fetchData = async () =>{
  //         const data = await fetch(`https://dummyjson.com/products/${productId}`);
  //         const resdata = await data.json();
  //         setsingleproduct(resdata);
  //      }
  if (!singleproduct) {
    return <p>Loading product details...</p>;
  }

  const { title, price, images } = singleproduct;

  return (
    <div>
      <div className="product">
        <img className="img_product" src={images} alt={title} />
        <h2>{title}</h2>

        <p>Price: ${price}</p>
        <button
          onClick={() => {
            dispatch(addItems(singleproduct));
          }}
          style={{
            backgroundColor: "lightgreen",
            borderRadius: "4px",
            margin: "20px",
            padding: "4px",
            boxShadow: "0 0 2px rgba(96, 75, 75, 0.5)",
          }}
        >
          add to cart
        </button>
      </div>
    </div>
  );
};
export default ProductDetails;
