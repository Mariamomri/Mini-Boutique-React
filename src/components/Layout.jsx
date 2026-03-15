import Header from '../components/Header'
import Home from '../pages/Home'
import Footer from '../components/Footer'
import slide from '../assets/Mecha_White_D_prob4.mp4'

function Layout() { 
    return ( 

      <div className="layout"> 
        <Header/>


          <h1>La Boutique D'Horologerie</h1>
          <video 
                src={slide} 
                className="slide" 
                autoPlay 
                loop 
                muted 
                playsInline
              />


        <Home/>

        
        <Footer/> 
      </div>
    );
}
  

export default Layout;



