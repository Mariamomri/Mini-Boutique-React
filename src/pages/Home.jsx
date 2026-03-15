import img1 from '../assets/Rolex Transparent I5m.png'
import ProductListe from '../components/ProductListe.jsx'

function Home(){


  const products = [
    { img: img1, name: "Rolex Submariner", price: 9500 },

  ];

  return(

  <>

    <ProductListe products={products} />
  </>
  );
}

export default Home