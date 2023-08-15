import React from 'react';
import { useState } from 'react';
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom';
import '../styles/navBar.scss'

function NavBar() {
  const handelClick = ()=>{
    SetClassState(!classState)
  }
  const openBar =  <i className="fa-solid fa-bars navBar--open bar" onClick = {handelClick} ></i>
  const closeBar = <i class="fa-solid fa-xmark navBar--close bar" onClick = {handelClick}></i>
  const [classState, SetClassState] = useState(false)
  const currentBar = classState ? closeBar : openBar

  const navID = classState ? 'displayNavBar' : null
  
  return (

    <nav >
        {currentBar}
        <ul className= 'navBar' id={navID}>
        <li className='NavBare--item'><img src={logo} alt='logo' className='NavBare--logo' /></li>
        <li className='NavBare--item'><NavLink to='/' className='NavBare--Link' >Home</NavLink></li>
        <li className='NavBare--item'><NavLink to='/Menu'className='NavBare--Link' >Menu</NavLink></li>
        <li className='NavBare--item'><NavLink to='/Contact'className='NavBare--Link' >Contact</NavLink></li>
        </ul>
    </nav>

  );
}

export default NavBar

