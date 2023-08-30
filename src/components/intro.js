import React from 'react'
import CTA from './CTA'
import logo from '../images/logo.png'
import Shap_1 from '../images/graph 1.png'
import '../styles/intro.scss'

function Intro() {
  return (
        <div className='IntroSection'>
            <div>
                <h1 className='IntroSection--heading'>Yummy Noddles</h1>
                <p>the most <span className='IntroSection--highlightText'>yummy</span> Noodles of Paris</p>
                <CTA />
            </div>
            <div className='InroSection__imagesContainer'>
                <img src={Shap_1} alt='shap' className='IntroSection__ImageShap_1' />
                <img src={logo} alt='logo' className='InroSection__image'/>
            </div>
        </div>
    )
}

export default Intro