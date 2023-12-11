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
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");

let positionIndex = 0;

// fonction qui permet de mettre à jour les points
function changeDots(index) {
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("dot_selected");
      // permet de colorer le premier point
    } else {
      dot.classList.remove("dot_selected");
      // enelève la class css pour les autres points
    }
  });
}

// fonction changement générale
function changeImages(index, sensImage) {
  //correction problème affichage
  if (positionIndex === -1 && sensImage === "left") {
    positionIndex = slides.length - 1;
  } else if (positionIndex === slides.length && sensImage === "right") {
    positionIndex = 0;
  }

  // mise à jour de l'image
  const imagePath = `assets/images/slideshow/${slides[positionIndex].image}`;
  bannerImg.src = imagePath;
  bannerImg.alt = `Slide ${positionIndex + 1}`;

  // mise à jour du texte
  const tagLine = slides[positionIndex].tagLine;
  document.querySelector("p").innerHTML = tagLine;

  console.log(`Clic sur la flèche ${sensImage}`);
}

// écoute de l'évènement de la flèche gauche avec addEventListener
arrowLeft.addEventListener("click", function () {
  positionIndex = positionIndex - 1;
  changeImages(positionIndex, "left");
  changeDots(positionIndex); // Mettez à jour les points indicateurs
});

// écoute de l'évènement de la flèche droite avec addEventListener
arrowRight.addEventListener("click", function () {
  positionIndex = positionIndex + 1;
  changeImages(positionIndex, "right");
  changeDots(positionIndex); // mise à jour des points dans le carrousel
});

// affichage de la première diapo
changeImages(positionIndex, "démarrage");
changeDots(positionIndex); // mise à jour des points pour la première diapo
