import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import {FaShoppingCart} from 'react-icons/fa'
function Header() {
  return (
    <div className='header'>
      <div className='logo-wrapper'>
        <Link to='/' className='logo'>ShoppyGlobe</Link>
      </div>
      <nav>
        <Link to='https://github.com/SNEHASUSANTHOMAS/ecommerce-react'>Git link</Link>
        <Link to='/'>Home</Link>
        <Link to='cart' className='cart-icon'><FaShoppingCart/></Link>
        <Link to='checkout'>Checkout</Link>
      </nav>
    </div>
  )
}

export default Header
