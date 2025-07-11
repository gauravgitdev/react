import { useEffect, useState,useContext } from 'react';
import Product,{HOF} from './Product';
import Skeleton from './skeleton'; // Importing skeleton component
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';//importing UserContext because to manuplate the value of the UseContect() hook
export const ProductCard = () => {
  const [listofProduct, setlistofProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]); // store original list
  const [searchTerm, setSearchTerm] = useState(''); // state for search input
  const user = useContext(UserContext);//here i am storing the UserContext value into user
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setlistofProducts(data.products);       // ✅ store just the array
      setOriginalProducts(data.products);     // ✅ keep a backup for filtering
    };
    fetchProducts();
    const timer = setInterval(() => {
      console.log('set interval')
      
    },1000); 


     
    return () =>{
      clearInterval(timer);// here return is used inside the useeffect to clean up
    }


  }, []);
    const HOFComponent = HOF(Product);
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
        <div >
          <input type ='text' value ={user.name} onChange={(e)=> user.setUsername(e.target.value)}/><h1>changing Usercontext value</h1>
          {/* here i am implementing the manuplation of the useContext() hook */}
        </div>
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
          <Link key={product.id} to={`/product/${product.id}`}>{
            product.rating >=4 ? <HOFComponent product={product}/>: <Product product={product} />
          }
  
</Link>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};
