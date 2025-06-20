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

export const HOF = (Product) => {
 
  return (props) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
      <span style={{ 
        backgroundColor: '#ffcc00', 
        color: '#000', 
        padding: '4px 8px', 
        borderRadius: '4px', 
        fontWeight: 'bold', 
        display: 'inline-block',
        marginBottom: '8px'
      }}>
        Best Seller
      </span>
      <Product {...props} />
    </div>
  );
};

};