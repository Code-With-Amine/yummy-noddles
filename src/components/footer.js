import React from 'react'
import '../styles/footer.scss'

function Footer() {
  const color = [
          {color: "blue"},
          {color: "red"},
          {color: '#de216d'},   
  ]
  return (
    <footer className='footer'>
        <section className='footer--contactInfo'>
            <div><i class="fa-solid fa-envelope" ></i> Info@YummyNoodes.com</div>
            <div><i class="fa-solid fa-phone"></i> +33756495851</div>
            <div><i class="fa-solid fa-location-dot" style={color[0]}></i> Paris</div>
            
        </section>

        <section className='footer--rights'>
        <p> &copy; ALL RIGHTS ARE RESERVED</p>

        </section>
        
        <section className='footer--socialMedia'>
    <i class="fa-brands fa-youtube" style={color[1]}></i>
    <i class="fa-brands fa-facebook" style={color[0]}></i>
    <i class="fa-brands fa-instagram" style={color[2]}></i>
        </section>
    </footer>
  )
}

export default Footer