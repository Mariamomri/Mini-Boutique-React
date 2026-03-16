// Créer le composant ProductList
// Reçoit un tableau de produits via props (products).
// Affiche plusieurs ProductCard en utilisant products.map(...)

import ProductCard from "./ProductCard";

function ProductListe({ products, onBuy }) {
  return (
    <div className='listCard'>
      {" "}
      {products.map((p) => (
        <ProductCard key={p.id} product={p} 
        onBuy={() => onBuy(p.id)}
        />
      ))}
    </div>
  );
}
// Le parent fournit les données, les enfants affichent.
export default ProductListe;
