import logo from '../assets/Logo montre minimali.png' 
function Header() {
  
  return (
    <>
    <header>

      <div>
        <img src={logo} alt="logo" /> 
      </div>

      <h2 class="header">La Boutique D'Horologerie </h2>

      <nav>

        <a href="#">Shop</a>
        <a href="#">Contact</a>
        <a href="#">About Us</a>


      </nav>
    </header>

    
    </>
  )
}

export default Header