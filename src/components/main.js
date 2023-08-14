import NavBar from './navBar'
import Home from './Home'
import Contact from './contact'
import Footer from './footer'
import MenuComponent from './MenuComponent'
import ContactComponent from './ContactComponent'
import '../styles/main.scss'


function Main() {
  return (
    <>
    <NavBar />
    <ContactComponent />
    <Contact />
    <Footer />
    </>
  )
}

export default Main