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
const dots = document.querySelectorAll(".dot"); // Sélectionnez tous les points

let positionIndex = 0;

// Fonction pour mettre à jour les points indicateurs
function changeDots(index) {
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("dot_selected"); // Ajoutez la classe pour le point actuel
    } else {
      dot.classList.remove("dot_selected"); // Supprimez la classe pour les autres points
    }
  });
}

// Fonction pour mettre à jour les points indicateurs, l'image et le texte
function changeImages(index, sensImage) {
  //correction du bug pour la première et la dernière image
  if (positionIndex === -1 && sensImage === "left") {
    positionIndex = slides.length - 1;
  } else if (positionIndex === slides.length && sensImage === "right") {
    positionIndex = 0;
  }

  // Mettre à jour l'image
  const imagePath = `assets/images/slideshow/${slides[positionIndex].image}`;
  bannerImg.src = imagePath;
  bannerImg.alt = `Slide ${positionIndex + 1}`;

  // Mettre à jour le texte
  const tagLine = slides[positionIndex].tagLine;
  document.querySelector("p").innerHTML = tagLine;

  console.log(`Clic sur la flèche ${sensImage}`);
}

// Gestionnaire d'événement pour le clic sur la flèche gauche
arrowLeft.addEventListener("click", function () {
  positionIndex = positionIndex - 1;
  changeImages(positionIndex, "left");
  changeDots(positionIndex); // Mettez à jour les points indicateurs
});

// Gestionnaire d'événement pour le clic sur la flèche droite
arrowRight.addEventListener("click", function () {
  positionIndex = positionIndex + 1;
  changeImages(positionIndex, "right");
  changeDots(positionIndex); // Mettez à jour les points indicateurs
});

// Afficher la première diapositive au chargement de la page
changeImages(positionIndex, "démarrage");
changeDots(positionIndex); // Mettez à jour les points indicateurs pour la première diapositive
