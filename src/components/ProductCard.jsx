// questo è il costruttore dei dati della carta che si mostrano nel navigatore. in poche parole dicono childe
import Card from '../components/Card'

function ProductCard({ product }) { 

  return ( 
  <div> 
    <img src={product.img} alt={product.name} />
    <h3>{product.name}</h3> 
    <p>{product.price} €</p> 
    <button>{product.button}</button> 
  </div> 
  ); 
} export default ProductCard;