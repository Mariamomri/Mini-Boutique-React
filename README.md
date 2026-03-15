Exercice : Mini Boutique React Thème libre (Props + Composants + Children + Composition)
Objectif
Créer une mini-boutique fonctionnelle en React en utilisant uniquement :
les props
la déstructuration
les children
la composition de composants

Consignes
Créer le composant Layout
Contient un header et un footer.
Affiche tout ce qui est passé entre ses balises via children au milieu.
Exemple d’utilisation :
<Layout>

  <h1>Ma boutique</h1>
</Layout>

Créer le composant ProductList
Reçoit un tableau de produits via props (products).
Affiche plusieurs ProductCard en utilisant products.map(...)

Créer le composant ProductCard
Reçoit un produit via props (product).
Affiche :
le nom du produit
le prix
un bouton "Acheter"
Optionnel : encadrer le contenu avec le composant Card.

Créer le composant Button
Reçoit label via props.
Affiche simplement un <button> avec ce texte.
C’est un composant gnérique (il ne connaît pas le produit).

Créer le composant Card
Reçoit children.
Sert à encadrer le contenu avec un style (bordure, padding, etc.).
Exemple d’utilisation :
<Card>

  <h3>Nom du produit</h3>
  <p>Prix : 49 €</p>
  <Button label="Acheter" />
</Card>
Données à utiliser
Dans App.jsx, créer un tableau

Bonus : Ajouter un compteur d’achats avec useState
Objectif
Chaque produit a un bouton “Acheter”.
Quand on clique dessus, un compteur de produits achetés augmente.
Cela montre l’utilisation de state dans React.
