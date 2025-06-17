import {useEffect,useState} from 'react'

const useGetSingleProduct = (productId) =>{
    const [singleProduct,setsingleProduct] = useState(null)

    useEffect(()=>{
        fetchSingleProduct();
    },[]);


    const fetchSingleProduct = async() =>{
        const data = await fetch('https://dummyjson.com/products/${productId}');
        const jsonData = await data.json();
        setsingleProduct(jsonData);

    }
    return singleProduct;
};

export default useGetSingleProduct;