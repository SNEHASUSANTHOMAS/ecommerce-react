import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addToCart } from '../utils/cartSlice'

function Productitem({product}) {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleAdd=()=>{
    dispatch(addToCart(product))
    navigate('/cart')
  }
  const {id,title,price,thumbnail}=product
  return (
    <div className='product-card'>
      <div className='product-info'>                
        <Link to={`/product/${product.id}`} >
          <img src={thumbnail} alt=""  />
          <h3>{title}</h3>
        </Link>
      </div>
      <p>₹{price}</p>
      <button onClick={(handleAdd)}>Add to cart</button>
    </div>
  )
}

export default Productitem
