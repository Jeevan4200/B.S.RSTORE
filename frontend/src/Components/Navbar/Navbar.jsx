import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
function Navbar() {
  const [menu,setMenu]=useState("shop");
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" className="logo" />
        <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
          <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} teto='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Men")}}><Link  style={{textDecoration:'none'}}to='/mens'>Mens</Link> {menu==="Men"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Women")}}><Link  style={{textDecoration:'none'}} to='/womens'>Womens</Link> {menu==="Women"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Kids")}}><Link  style={{textDecoration:'none'}} to='/kids'>Kids</Link> {menu==="Kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link  style={{textDecoration:'none'}} to='/login'><button>logining</button></Link>
          <Link   style={{textDecoration:'none'}}to='/cart'><img src={cart_icon} alt="" /></Link>
          <div className="nav-login-count">0</div>
        </div>
      </div>
    
  )
}

export default Navbar