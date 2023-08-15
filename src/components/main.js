import React from 'react';
import NavBar from './navBar';
import Home from './Home';
import Contact from './contact';
import Footer from './footer';
import MenuComponent from './MenuComponent';
import ContactComponent from './ContactComponent';
import { Route, Routes, useNavigate} from 'react-router-dom';
import '../styles/main.scss';


function Main() {

  const navigate = useNavigate() 

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<MenuComponent />} />
        <Route path="/Contact" element={<ContactComponent />} />
        <Route path="*" render={() => navigate("/Home")} />

      </Routes>
    <Contact />
    <Footer />
    </>
  )
}

export default Main