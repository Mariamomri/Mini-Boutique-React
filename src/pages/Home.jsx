import img1 from '../assets/Untitled.jpeg'
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