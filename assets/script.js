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

const bannerImg = document.querySelector(".banner-img");

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

//Sélection de tous les points
let dots = document.querySelectorAll(".dot");
//let dots = ["0", "1", "2", "3"];

const slide = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg"];
let numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slide.length - 1;
  if (numero > slide.length - 1) numero = 0;
  document.querySelectorAll("slides").src = slide[numero];
}
setInterval("ChangeSlide(1)", 4000);
function texte() {
  document.getElementById("tagline").innerHTML = "";
}

// Ajout d'un gestionnaire d'événements à chaque point
//dots.forEach(function (dot) {
// dot.addEventListener("click", function () {
//dots.forEach(function (dot) {
//dot.classList.remove("active");
//});
//dot.classList.add("active");
//});
//});
//let baliseImage = document.getElementById("slide1.jpg");
//baliseImage.setAttribute("alt", "Ceci est la nouvelle valeur de alt");
//let slideshow = 1;
//showSlides(slideshow);

//function plusSlides(n) {
//showSlides((slideshow += n));
//}

/*function currentSlide(n) {
  showSlides((slideshow = n));
}
function showSlides(n) {
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideshow = 1;
  }

  if (n < 1) {
    slideshow = slides.length;
  }

  // Cacher toutes les slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Retirer "active" de tous les points
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Afficher la slide demandée
  slides[slideshow - 1].style.display = "block";

  // Ajouter "active" sur le point cliqué
  dots[slideshow - 1].classList.add("active");
}

//var imagejavascript = document.createElement("img");
//imagejavascript.src = "assets/images/slideshow/slide1.jpg";
//document.body.appendChild(imagejavascript);
//const image = new Image("slide1.jpg");*/
