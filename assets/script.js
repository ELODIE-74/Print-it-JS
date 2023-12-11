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

let Index = 0;
let direction = "";

const bannerImage = document.getElementById(".banner-img");
// mettre à jour le texte
const tagLine = slides[Index].tagLine;
document.querySelector("#banner p").innerHTML = tagLine;
console.log(`Clic sur la flèche ${direction}`);

//mettre à jour l'images
const changeImage = `assets/images/slideshow/${slides[Index].image}`;
bannerImage.src = changeImage;
bannerImage.alt = slides[Index].image;

console.log("slides");

//Clique des flèches
let baliseBannerArrows = document.querySelectorAll(".arrow");
for (let i = 0; i < baliseBannerArrows.length; i++) {
  let arrowLeft = document.querySelector(".arrow_left");
  arrowLeft.addEventListener("click", function () {
    // Clique gauche écoute
    direction = "gauche";
    miseajourDot(Index);
    ChangeSlide("gauche");
    console.log(`Clic sur la flèche ${direction}`);
  });
  let arrowRight = document.querySelector(".arrow_right");
  arrowRight.addEventListener("click", function () {
    // Clique droite écoute
    direction = "droite";
    miseajourDot(Index);
    ChangeSlide("droite");
    console.log(`Clic sur la flèche ${direction}`);
  });
}

// Affichage des points et activation et écoute des points
let dots = document.querySelector(".dots");
function miseajourDot(Index) {
  // Supprimer tous les points existants
  while (dots.firstChild) {
    dots.removeChild(dots.firstChild);
  }
  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    dots.append(dot);
    if (i === Index) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
    // Ajouter un gestionnaire d'événement clic pour chaque point
    dot.addEventListener("click", function () {
      miseajourDot(i); // Mettre à jour l'index en fonction du point cliqué
    });
  }
}

//chargement et changement de slide
let slidesArray = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg"];

function ChangeSlide(direction) {
  if (direction === "gauche") {
    Index -= 1;
    if (Index < 0) {
      Index = slides.length - 1;
    }
  } else if (direction === "droite") {
    Index += 1;
    if (Index >= slides.length) {
      Index = 0;
    }
  }
}
// affichage de la diapo de début
ChangeSlide("commencement");
miseajourDot(Index);
