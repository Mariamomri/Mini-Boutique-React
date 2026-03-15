import logo from '../assets/Logo montre minimali.png'
import SocialIcons from '../components/SocialIcons'
function Footer() { 
    return ( 
      <footer>
        <img src={logo} alt="logo" className="logo"/> 

        
        <SocialIcons/>

        <p >©Cfitech - Mariam Omri</p>
      </footer>
    ); 
  } export default Footer;


