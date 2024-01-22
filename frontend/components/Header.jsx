import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className='header desktop-header'>
        <div className="logoDiv">
            <p id="logo">eco-Node</p>
        </div>

        <menu>
            <ul>
                <li><Link to="/" className='link'>Home</Link></li>
                <li><Link to="/how" className='link'>How it Works</Link> </li>
                <li><Link to="/register" className='link'>Register</Link></li>
                <li><Link to="/wallet" className='link'>My Wallet</Link></li>
                <li><Link to="/dash" className='link'>Dashboard</Link></li>
            </ul>
        </menu>
    </section>
  )
}

export default Header