import React from 'react'
import '../styles/footer.scss'

function Footer() {
  return (
    <footer className='footer'>
        <section className='footer--contactInfo'>
            <div><i class="fa-solid fa-envelope" ></i>  eamil@gamil.com</div>
            <div><i class="fa-solid fa-phone"></i> 00000000000</div>
            <div><i class="fa-solid fa-location-dot"></i> paris</div>
            
        </section>

        <section className='footer--rights'>
        <p>&copy;ALL RIGHTS ARE RESERVED</p>

        </section>
        
        <section className='footer--socialMedia'>
    <i class="fa-brands fa-youtube"></i>
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-instagram"></i>
        </section>
    </footer>
  )
}

export default Footer