import React from 'react';
import logo from '../images/logo.png'
import '../styles/navBar.scss'

function NavBar() {
  return (
    <nav >
        <ul className='navBar'>
        <li className='NavBare--item'><img src={logo} alt='logo' className='NavBare--logo' /></li>
        <li className='NavBare--item'><a href='#'>Home</a></li>
        <li className='NavBare--item'><a href='#'>Menu</a></li>
        <li className='NavBare--item'><a href='#'>Contact</a></li>
        </ul>
    </nav>
  );
}

export default NavBar

