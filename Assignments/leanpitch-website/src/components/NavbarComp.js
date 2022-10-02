import React from 'react'
import './style.css'
import pic from './../assets/product.png'

const NavbarComp = () => {
  return (
    <div className='navbar-container'>
        <div className='left'>
            <img width='40' src={pic} alt='pwhite' />
            <a>Leanpitch</a>
        </div>    
        <div className='right'>
            <a className='subscribe'>Subscribe</a>
            <a className='contact'>Contact Us</a>
        </div>
    </div>
  )
}

export default NavbarComp