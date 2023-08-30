import React, { useEffect } from 'react';
import NavBar from './navBar';
import Home from './Home';
import Contact from './contact';
import Footer from './footer';
import MenuComponent from './MenuComponent';
import ContactComponent from './ContactComponent';
import OrderCompenent from './OrderCompenent';
import { Route, Routes, useNavigate } from 'react-router-dom';
import '../styles/main.scss';

function AnimateCursor() {
  useEffect(() => {
    const Cursor = (e) => {
      Mousecursor.style.top = e.pageY + "px";
      Mousecursor.style.left = e.pageX + "px";
    };

    const OrderCursor = () => {
      cursrOrder.style.display = 'block';
      Mousecursor.style.width = '4rem';
      Mousecursor.style.height = '4rem';
    };

    const ChangeCursorStyle = () => {
      Mousecursor.classList.add('CTA-Btn__cursor');
    };

    const RemoveCursorStyle = () => {
      Mousecursor.classList.remove('CTA-Btn__cursor');
    };

    const OrderCursorRemove = () => {
      cursrOrder.style.display = 'none';
      Mousecursor.style.width = '2rem';
      Mousecursor.style.height = '2rem';
    };

    const cursrOrder = document.querySelector('.cursor__order');
    const Mousecursor = document.querySelector('.cursor');
    const OrderCompenent = document.querySelector('.Order');
    const CTABtn = document.querySelector('.CTA-Btn');

    if (OrderCompenent) {
      OrderCompenent.addEventListener('mouseenter', OrderCursor);
      OrderCompenent.addEventListener('mouseleave', OrderCursorRemove);
    }

    if (CTABtn) {
      CTABtn.addEventListener('mouseenter', ChangeCursorStyle);
      CTABtn.addEventListener('mouseleave', RemoveCursorStyle);
    }

    window.addEventListener("mousemove", Cursor);

    return () => {
      if (OrderCompenent) {
        OrderCompenent.removeEventListener('mouseenter', OrderCursor);
        OrderCompenent.removeEventListener('mouseleave', OrderCursorRemove);
      }

      if (CTABtn) {
        CTABtn.removeEventListener('mouseenter', ChangeCursorStyle);
        CTABtn.removeEventListener('mouseleave', RemoveCursorStyle);
      }

      window.removeEventListener("mousemove", Cursor);
    };
  }, []);
}

function Main() {
  AnimateCursor();
  const navigate = useNavigate();

  return (
    <>
      <div className='cursor'>
        <span className='cursor__order'>Order</span>
      </div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<MenuComponent />} />
        <Route path="/Contact" element={<ContactComponent />} />
        <Route path="/Order" element={<OrderCompenent />} />
        <Route path="*" render={() => navigate("/Home")} />
      </Routes>
      <Contact />
      <Footer />
    </>
  );
}

export default Main;
