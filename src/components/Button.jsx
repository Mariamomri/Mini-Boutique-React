// Exemple de composant générique :


function Button({ label, onClick }) { 
  return ( 
  
  <button className="btn" onClick={onClick}> {label} </button> 

    // useState(){
    //   // qui fare in modo che faccia piu 1
    // }
  ); 
} 
export default Button;


// Il ne connaît pas :
// •
// produit
// •
// utilisateur
// •
// réservation
// •
// présence
// •
// métier
// Il affiche simplement un bouton.