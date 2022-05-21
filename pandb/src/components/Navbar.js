import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>

    <h2 className='port-nav-logo'><Link to='/' className='port-nav-logo'>Pawan Arasu .T 😎</Link></h2>    



    <div className='port-links'>

      <Link to="/" className='port-nav-items home' >🏡</Link>
      <Link to="/blog" className='port-nav-items blogs' >📃</Link>
      
           

    </div>

      </div>
  )
}

export default Navbar