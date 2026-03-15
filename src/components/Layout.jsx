import Header from '../components/Header'
import Home from '../pages/Home'
import Footer from '../components/Footer'

function Layout() { 
    return ( 

      <div className="layout"> 
        <Header/>


          <h1>Ma Boutique</h1>

        <Home/>

        
        <Footer/> 
      </div>
    );
}
  

export default Layout;



