const Product = ({product}) => {
  const {title, description, price, images} = product;//destructuring product object
  return (
    <div className='product'>
      <img className="img_product" src={images[0]} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
  
};
export default Product;//default export of Product component