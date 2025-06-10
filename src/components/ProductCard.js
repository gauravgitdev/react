import {productList} from '../utils/constant';
import Product from './Product';
export const ProductCard = () => {
  return (
    <div className='product_card'>
      {
        productList.products.map((product)=>{
          return (
            <Product product={product} key={product.id} />
          )
        })
      }
    </div>
  );
};