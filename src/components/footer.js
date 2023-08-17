import React, { useEffect } from 'react';
import '../styles/footer.scss';

function SetCursorBorder() {
  useEffect(() => {
    const footer = document.querySelector('.footer');
    const mouseCursor = document.querySelector('.cursor');

    const setBorder = () => {
      mouseCursor.style.border = '3px solid #fff';
    };

    const RemoveBorder = () =>{
      mouseCursor.style.border = '';

    }

    footer.addEventListener('mouseenter', setBorder);
    footer.addEventListener('mouseleave', RemoveBorder);


    return () => {
      footer.removeEventListener('mouseenter', setBorder);
    };
  }, []);

  return null;
}

function Footer() {
  SetCursorBorder();

  const color = [
    { color: "blue" },
    { color: "red" },
    { color: '#de216d' },
  ];

  return (
    <footer className='footer'>
      <section className='footer--contactInfo'>
        <div><i className="fa-solid fa-envelope"></i> Info@YummyNoodles.com</div>
        <div><i className="fa-solid fa-phone"></i> +33756495851</div>
        <div><i className="fa-solid fa-location-dot" style={color[0]}></i> Paris</div>
      </section>

      <section className='footer--rights'>
        <p>&copy; ALL RIGHTS ARE RESERVED</p>
      </section>
      
      <section className='footer--socialMedia'>
        <i className="fa-brands fa-youtube" style={color[1]}></i>
        <i className="fa-brands fa-facebook" style={color[0]}></i>
        <i className="fa-brands fa-instagram" style={color[2]}></i>
      </section>
    </footer>
  );
}

export default Footer;
