import React from 'react'
import '../styles/contactSec.scss'

function Contact() {
  return (
    <div className='contact-section'>
        <h2 className='contact-section--title'>Contact</h2>
        <p className='contact-section--description'>
        Do you want to ask us a question, give us feedback, or simply contact us?
Write to us at <span className='contact-section__highlight'>yummy@noodles.fr</span> or call us at <span className='contact-section__highlight'>01 13 86 23 42</span>
        </p>

    </div>
  )
}

export default Contact