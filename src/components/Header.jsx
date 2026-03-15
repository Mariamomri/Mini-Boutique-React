import logo from '../assets/Logo montre minimali.png' 
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
        <a href="#">About Us</a>


      </nav>
    </header>

    
    </>
  )
}

export default Header