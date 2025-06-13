import { useEffect, useState } from 'react';
import Product from './Product';
import Skeleton from './skeleton'; // Importing skeleton component
import { Link } from 'react-router-dom';

export const ProductCard = () => {
  const [listofProduct, setlistofProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]); // store original list
  const [searchTerm, setSearchTerm] = useState(''); // state for search input
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setlistofProducts(data.products);       // ✅ store just the array
      setOriginalProducts(data.products);     // ✅ keep a backup for filtering
    };
    fetchProducts();
  }, []);
    
  return listofProduct.length === 0 ? <Skeleton/> : (
    
    <div>
      <div>
        <input type="text" onChange={(e)=>{
          const term=e.target.value // Update search term on input change
         setSearchTerm(term)
          const filtered = originalProducts.filter(product =>
            product.title.toLowerCase().includes(term.toLowerCase())
          );
          setlistofProducts(filtered);
          
        }} value={searchTerm} ></input>
        
        <button >Search</button>
      </div>
      <button
        onClick={() => {
          const filteredProducts = originalProducts.filter(product => product.rating > 4);
          setlistofProducts(filteredProducts); // ✅ set filtered array
        }}
        style={{ marginTop: '20px' }}
        className='btn'
      >
        Top rated products
      </button>

      <div className='product_card'>
        {listofProduct.length > 0 ? (
          listofProduct.map(product => (
          <Link key={product.id} to={`/product/${product.id}`}>
  <Product product={product} />
</Link>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};
