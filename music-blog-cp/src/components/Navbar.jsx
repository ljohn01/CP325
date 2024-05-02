import React from 'react'
import './Navbar.css'
import mainLogo from '../images/harmonic-haven.png'



const Navbar = () => {
  return (
    <div className='navbar'>
     <img src={mainLogo} alt="Harmonic Haven Logo" className='logo'/>
     <ul>
        <li> <a href="/">Home</a></li>
        <li> <a href="about">About</a></li>
        <li> <a href="/blog">Blog</a></li>
        <li> <a href="/profile">Profile</a></li>
     </ul>

 
<div className='search-box'>
    <input type="text" placeholder='Search'/>
    <img src="" alt=""/>
</div>



    </div>
  )
}

export default Navbar

