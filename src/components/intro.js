import React from 'react'
import CTA from './CTA'
import logo from '../images/logo.png'
import '../styles/intro.scss'

function Intro() {
  return (
        <div className='IntroSection'>
            <div>
                <h1 className='IntroSection--heading'>Yummy Noddles</h1>
                <p>the most <span className='IntroSection--highlightText'>yummy</span> Noodles of Paris</p>
                <CTA />
            </div>
            <div>
                <img src={logo} className='InroSection__image'/>
            </div>
        </div>
    )
}

export default Intro