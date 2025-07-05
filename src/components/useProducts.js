import React ,{useState,useEffect} from "react";
import axios from "axios";
function useProducts(){
    const [products,setProducts]=useState([])
    const [error,setError]=useState(null)
  useEffect(()=>{
    const fetchProducts=async()=>{
      try{
        const response=await axios.get('https://dummyjson.com/products')
        setProducts(response.data.products)
      }
      catch(err){
        setError(err.message)

      }
      
    }
    fetchProducts();
  },[])
    return (
        {products,error}
    )
}
export default useProducts;