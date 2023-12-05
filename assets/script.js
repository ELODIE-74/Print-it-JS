const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let baliseBannerArrows = document.querySelectorAll(".arrow");
for (let i = 0; i < baliseBannerArrows.length; i++) {
  let arrow = baliseBannerArrows[i];
  arrow.addEventListener("click", function () {
    console.log("Flèche cliquée");
  });
}
// Sélectionnez l'élément de la flèche gauche
let arrowLeft = document.querySelector(".arrow_left");
// Ajout d'un gestionnaire d'événements pour le clic sur la flèche gauche
arrowLeft.addEventListener("click", function () {
  console.log("Flèche gauche cliquée");
});
// Sélectionnez l'élément de la flèche droite
let arrowRight = document.querySelector(".arrow_right");
// Ajout d'un gestionnaire d'événements pour le clic sur la flèche droite
arrowRight.addEventListener("click", function () {
  console.log("Flèche droite cliquée");
});

//baliseBannerArrows.addEventListener("click", ".arrow");
//On sélectionne le premier button et le premier div du document
//let arrow = document.querySelector(".arrow");
//let div = document.querySelector(".arrow");
//On utilise les propriétés gestionnaires d'évènement avec nos éléments
//arrowleft.onclick = function () {
//alert("Flèche gauche cliqué");
//};
//arrowright.onclick = function () {
//alert("Flèche droite cliqué");
//};
