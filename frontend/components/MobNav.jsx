import { Link } from 'react-router-dom';
import React, { useState } from 'react';


const MobNav = () => {
    
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`mobile-header ${mobileMenuOpen ? 'is-active' : ''}`}>
        <div className="logoDiv">
            <p id="logo">eco-Node</p>
        </div>


        <button className={`hamburger ${mobileMenuOpen ? 'is-active' : ''}`} onClick={handleMobileMenuToggle}>
            <div className="bar"></div>
        </button>

        <nav className={`mobile-nav ${mobileMenuOpen ? 'is-active' : ''}`}>
            <ul>
                <li><Link to="/" className='link'>Home</Link></li>
                <li><Link to="/how" className='link'>How it Works</Link> </li>
                <li><Link to="/register" className='link'>Register</Link></li>
                <li><Link to="/wallet" className='link'>My Wallet</Link></li>
                <li><Link to="/dash" className='link'>Dashboard</Link></li>
            </ul>
        </nav>

    </header>
  )
}

export default MobNav