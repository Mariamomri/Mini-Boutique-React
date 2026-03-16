import logo from '../assets/Logo montre minimali.png' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {

  return (
    <>
    <header>

      <div>
        <img src={logo} alt="logo" className='logo'/> 
      </div>

      <nav>

        <a href="#">Shop</a>
        <a href="#">Contact</a>
        <a href="../pages/CartShopping.jsx"><FontAwesomeIcon icon={faCartShopping} /></a>
      </nav>
    </header>

    
    </>
  )
}

export default Header