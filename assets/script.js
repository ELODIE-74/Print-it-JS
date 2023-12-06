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

const bannerImage = document.getElementById("banner-img");

//Clique des flèches
let baliseBannerArrows = document.querySelectorAll(".arrow");
for (let i = 0; i < baliseBannerArrows.length; i++) {
  let arrow = baliseBannerArrows[i];
  arrow.addEventListener("click", function () {
    console.log("Flèche cliquée");
  });
}
let arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function () {
  // clique gauche écoute
  console.log("Flèche gauche cliquée");
});
let arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function () {
  // clique droite écoute
  console.log("Flèche droite cliquée");
});

//Affichage des points et activation et écoute des points
let dots = document.querySelector(".dots");
let index = 0;
for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  dots.append(dot);
  if (i === 0) {
    dot.classList.add("dot_selected");
  }
}

//changement de slide
const slidesArray = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg"];
