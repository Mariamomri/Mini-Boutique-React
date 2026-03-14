

function Card({ children }) { 
  return ( 
    <div className="card"> 
    
    {children} 

    </div> 
    
  ); 
} 

export default Card;

// Utilisation :
// <Card> <h2>Produit</h2> <p>Description du produit</p> </Card>
// Tout ce qu’il y a entre <Card>...</Card> devient children.