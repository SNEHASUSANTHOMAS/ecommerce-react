import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {decreaseQty, increaseQty, removeFromCart} from '../utils/cartSlice'

function CartItem({item}) {
 const dispatch=useDispatch()
const {id,title,price,quantity,thumbnail}=item

  return (
    <div className='cart-item'>
      <div className='cart-item-main'>
        <img src={thumbnail} alt="" />
        <p>{title}- ₹{price} (x{quantity})</p>
        <button onClick={()=>dispatch(increaseQty(id))}>+</button>
      </div>
      <div className='cart-item-actions'>
        <button onClick={()=>dispatch(decreaseQty(id))}>-</button>
        <button onClick={()=>dispatch(removeFromCart(id))}>Remove</button>
      </div>
    </div>
  )
}

export default CartItem
