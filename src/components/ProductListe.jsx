// Créer le composant ProductList
// Reçoit un tableau de produits via props (products).
// Affiche plusieurs ProductCard en utilisant products.map(...)

import ProductCard from "./ProductCard";

function ProductListe({ products }) {
  return (
    <div className='listCard'>
      {" "}
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
// Le parent fournit les données, les enfants affichent.
export default ProductListe;
