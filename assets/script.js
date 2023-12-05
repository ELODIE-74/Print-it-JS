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
baliseBannerArrows.addEventListener("click", showMsg);
//On sélectionne le premier button et le premier div du document
let arrowleft = document.querySelector(".arrow_left");
let div = document.querySelector(".arrow");

//On utilise les propriétés gestionnaires d'évènement avec nos éléments
arrowleft.onclick = function () {
  alert("Flèche gauche cliqué");
};
imgArrow.onmouseover = function () {
  this.style.backgroundColor = "orange";
};
div.onmouseout = function () {
  this.style.backgroundColor = "white";
};
