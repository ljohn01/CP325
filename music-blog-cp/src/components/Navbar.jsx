import React from 'react'
import './Navbar.css'
import mainLogo from '../images/harmonic-haven.png'


const Navbar = () => {
  return (
    <div className='navbar'>
     <img src={mainLogo} alt="Harmonic Haven Logo" className='logo'/>
     <ul>
        <li href="/">Home</li>
        <li href="/about">About</li>
        <li href="/blog">Blog</li>
        <li href="/profile">Profile</li>
     </ul>

<div className='search-box'>
    <input type="text" placeholder='Search'/>
    <img src="" alt=""/>
</div>

<img src="" alt="" className='toggle-icon'/>

    </div>
  )
}

export default Navbar

