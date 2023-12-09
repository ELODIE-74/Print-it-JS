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
const bannerImage = document.getElementById("banner-img");
// mettre à jour le texte
const tagLine = slides[Index].tagLine;
document.querySelector("p").innerHTML = tagLine;
console.log(`Clic sur la flèche ${direction}`);

//Clique des flèches
let baliseBannerArrows = document.querySelectorAll(".arrow");
for (let i = 0; i < baliseBannerArrows.length; i++) {
  let arrowLeft = document.querySelector(".arrow_left");
  arrowLeft.addEventListener("click", function () {
    // Clique gauche écoute
    direction = "gauche";
    miseajourDot(Index);
    console.log(`Clic sur la flèche ${direction}`);
  });
  let arrowRight = document.querySelector(".arrow_right");
  arrowRight.addEventListener("click", function () {
    // Clique droite écoute
    direction = "droite";
    miseajourDot(Index);
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

//changement de slide
const slidesArray = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg"];
/*function miseajourSlide(index, sensclick) {
  if (Index === -1 && sensclick === "left") {
    Index = slides.length - 1;
  } else if (Index === slides.length && sensclick === "right") {
    Index = 0;
  }
}
//mise a jour de l'image au moment du cliquage
const imageSlide = "assets/images/slideshow/" + slides[Index].image;
bannerImage.src = imageSlide;
bannerImage.alt = "Slide" + (Index + 1);

// affichage de la diapo de début
miseajourSlide(Index, "commencement");*/
miseajourDot(Index);
