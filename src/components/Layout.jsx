import Header from '../components/Header'
import Home from '../pages/Home'
import Footer from '../components/Footer'
import slide from '../assets/Mecha_White_D_prob4.mp4'

function Layout() { 
    return ( 

      <div className="layout"> 
        <Header/>


          <h1>La Boutique D'Horologerie</h1>

            <Home/>

          <div className='text'>
            <h2>“Découvrez l’art du temps.”</h2>
            <p>
              Chez La Boutique d’Horlogerie, chaque montre raconte une histoire.
              Nous sélectionnons avec soin des pièces d’exception, alliant précision, élégance et savoir‑faire horloger.
              Que vous recherchiez un modèle iconique, une montre sportive ou un design intemporel, notre collection est pensée pour accompagner chaque moment de votre vie.
              Laissez-vous inspirer par notre univers et trouvez la montre qui vous ressemble. <br /><br /> </p>

              <h2>““””</h2>
          </div>
          <video 
                src={slide} 
                className="slide" 
                autoPlay 
                loop 
                muted 
                playsInline
              />


      

        
        <Footer/> 
      </div>
    );
}
  

export default Layout;



