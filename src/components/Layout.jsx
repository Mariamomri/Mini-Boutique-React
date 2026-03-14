import Header from '../components/Header'
import Footer from '../components/Footer'

function Layout({ children }) { 
    return ( 

      <div className="layout"> 
        <Header/>


          <h1>Ma Boutique</h1>


        {children} 
        
        <Footer/> 
      </div>
    );
}
  

export default Layout;



