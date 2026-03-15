// import { useState } from "react";
import ProductListe from '../components/ProductListe.jsx'

function Home(){


  const products = [
    {  name: "Rolex Submariner", price: 9500, button: "Rolex" },

  ];

  return(

  <>

    <ProductListe products={products} />
  </>
  );
}

export default Home