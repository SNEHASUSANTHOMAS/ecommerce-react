import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addToCart } from '../utils/cartSlice'

function ProductDetails() {
  const {id}=useParams()
  const [product,setProduct]=useState(null)
  const [error,setError]=useState(null)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleAdd=()=>{
    dispatch(addToCart(product))
    navigate('/cart')
  }
  useEffect(()=>{
    const productDetails=async()=>{
      try{
          const response=await axios.get('https://dummyjson.com/products/'+id) 
          setProduct(response.data)
      }
      catch(err){
        setError(err.message)
      }
    }  
    productDetails()  
  },[id])
  if(!product && !error){
    return <p>Loading...</p>
  }
  return (
    <div className='product-details'>
      <img src={product.thumbnail} alt="" width='200'/>
      <h1>{product.title}</h1>
      <h2>{product.description}</h2>
      <h3>{product.shippingInformation}</h3>
      <button onClick={handleAdd}>Add to cart</button>
    </div>
  )
}

export default ProductDetails
