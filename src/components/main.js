import NavBar from './navBar'
import Intro from './intro'
import Locations from './locations'
import OrderNow from './OrderNow'
import Craft from './Craft'
import Socials from './socials'
import Contact from './contact'
import Footer from './footer'
import '../styles/main.scss'


function Main() {
  return (
    <>
    <NavBar />
    <Intro />
    <Locations />
    <OrderNow />
    <Craft />
    <Socials />
    <Contact />
    <Footer />
    </>
  )
}

export default Main