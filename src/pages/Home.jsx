import img1 from '../assets/Rolex Transparent I5m.png'
import img2 from '../assets/Casio G-Shock senza .png'

import ProductListe from '../components/ProductListe.jsx'

function Home(){


  const products = [
    { img: img1, name: "Rolex Submariner", price: 9500 },
    { img: img2, name: "Casio G-Shock", price: 120}
  ];

  return(

  <>

    <ProductListe products={products} />
  </>
  );
}

export default Home