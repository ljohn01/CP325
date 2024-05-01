import { useState } from 'react'
import Navbar from '../components/Navbar';  
import './App.css'
import About from '../components/About'
import Blog from '../components/Blog';
import Profile from '../components/Profile';

function App() {
  let Component
  switch (window.location.pathname) {
    case "/home":
      Component = App
    break
    case "/about":
      Component = About
      break
      case "/blog":
        Component = Blog
        break
        case "/profile":
          Component = Profile
          break
  }
return (
  <> 
  <Navbar />
  <Component /> 
  </>
 
)
}

export default App
