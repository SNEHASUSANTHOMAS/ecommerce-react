import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { clearCart } from "../utils/cartSlice"

function Checkout(){
    const cartItems=useSelector((state)=>state.cart.cartItems)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const totalPrice=cartItems.reduce((acc,item)=>acc+item.price*item.quantity,0)
    const [formData,setFormData]=useState({
        name:'',
        address:'',
        email:''
    })
    const [orderPlaced,setOrderPlaced]=useState(false)
    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!formData.name||!formData.address||!formData.email){
            alert("Please fill in all the fields")
            return
        }
        setOrderPlaced(true)
        setTimeout(()=>{
            navigate('/')
            dispatch(clearCart())
        },3000)
    }
    if (cartItems.length === 0) {
        return <div className="empty-cart-message">Your cart is empty. Please add some items before checking out.</div>;
    }
    return(
        <div className="checkout">
            <h2>Checkout </h2>
            {
                orderPlaced?(<p>✅Order placed successfully!Redirecting to home...</p>)
                :(
                    <div className="checkout-form">
                        <form onSubmit={handleSubmit} >
                            <input type="text" placeholder="Enter name"    name="name"    value={formData.name}    onChange={handleChange} /><br/>
                            <input type="text" placeholder="Enter address" name="address" value={formData.address} onChange={handleChange} /><br/>
                            <input type="text" placeholder="Enter email"   name="email"   value={formData.email}   onChange={handleChange} /><br/>
                            <h3>Amount to pay:₹{totalPrice.toFixed(2)}</h3>
                            <button type="submit">Place order</button>
                        </form>
                    </div>
                )
            }
        </div>
    )
}
export default Checkout