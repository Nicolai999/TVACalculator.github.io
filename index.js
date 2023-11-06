// Calculateur tva :

// Formluaire avec :
// - Marque
// - Modèle
// - Année du modèleµ
// - Pays de fabrication ?
// - Montant d'achat

// ---------> Resultat du taux de tva suivant le information au dessus + tva à payer à part

// Bonus : Prix à payer avec nos service compris

// note :
// utiliser innerhtml pour injecter le resultat

// ---------------------------------------
// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("vehicle-form");
//   const resultDiv = document.getElementsByClassName("result");

//   form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     // Récupérer les valeurs du formulaire
//     const brand = document.getElementById("brand").value;
//     const model = document.getElementById("model").value;
//     const year = parseInt(document.getElementById("year").value, 10);
//     const madeInEurope = document.getElementById("made-in-europe").checked;
//     const price = parseFloat(document.getElementById("buying-price").value);

//     let tvaRate;

//     // Appliquer la logique de calcul de la TVA
//     if (year < 1993) {
//       tvaRate = 0.055; // TVA de 5.5% pour les véhicules fabriqués avant 1993
//     } else if (madeInEurope) {
//       tvaRate = 0.2; // TVA de 20% pour les véhicules fabriqués en Europe après 1993
//     } else {
//       tvaRate = 0.3; // TVA de 30% pour les véhicules fabriqués hors de l'Europe après 1993
//     }

//     const tvaAmount = price * tvaRate;

//     // Afficher le résultat
//     resultDiv.innerHTML = `
//         <p>Marque: ${brand}</p>
//         <p>Modèle: ${model}</p>
//         <p>Année de fabrication: ${year}</p>
//         <p>Prix du véhicule: ${price.toFixed(2)} €</p>
//         <p>TVA appliquée: ${(tvaRate * 100).toFixed(0)}%</p>
//         <p>Montant de la TVA: ${tvaAmount.toFixed(2)} €</p>
//         `;
//   });
// });
// --------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  let resultDiv = document.getElementById("result");
  let form = document.getElementById("vehicle-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const year = parseInt(document.getElementById("year").value);
    const madeInEurope = document.getElementById("made-in-europe").checked;
    const price = parseFloat(document.getElementById("buying-price").value);

    let tvaRate;

    if (year < 1993) {
      tvaRate = 0.055;
    } else if (madeInEurope && year > "1993") {
      tvaRate = 0.2;
    } else {
      tvaRate = 0.3;
    }

    const tvaAmount = price * tvaRate;

    resultDiv.innerHTML = `
  <p>Prix du véhicule: ${price.toFixed(2)} €</p>
  <p>TVA appliquée: ${(tvaRate * 100).toFixed(0)}%</p>
  <p>Montant de la TVA à payer : ${tvaAmount.toFixed(2)} €</p>`;
  });
});
