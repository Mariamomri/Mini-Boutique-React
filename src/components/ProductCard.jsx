// questo è il costruttore dei dati della carta che si mostrano nel navigatore. in poche parole dicono child
import Card from './Card'
import Button from "./Button";

function ProductCard({ product }) { 

  return ( 
  <Card> 
    <img src={product.img} alt={product.name} />
    <div className='textCard'>
      <h3>{product.name}</h3> 
      <p className="price">{product.price} €</p> 
      <Button label="Acheter"/>
    </div> 
  </Card> 
  ); 
} export default ProductCard;