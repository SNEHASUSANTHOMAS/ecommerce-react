import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const navigate=useNavigate()
  const cartItems=useSelector(state=>state.cart.cartItems)
  const totalPrice=cartItems.reduce((acc,item)=>acc+item.price*item.quantity,0)
  if(cartItems.length==0){
    return <div className='empty-cart-message'>Your cart is empty</div>
  }
  return (
    <div className='cart-container'>
      <h2>Your cart</h2>
      <div className='checkout-total-wrapper'>
        <button onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
        <h3>Total Price:₹{Number(totalPrice).toFixed(2)}</h3>
      </div>
      {
        cartItems.map((item)=>(
          <CartItem key={item.id} item={item}/>
        ))
      }
    </div>
  )
}

export default Cart
