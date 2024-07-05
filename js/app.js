//Mobile menu
    //Ouverture de menu pour le mode mobile
    const openMenu = () => {
        const menu = document.querySelector('.header-menu');
        menu.classList.toggle('active');
        if (menu.classList.contains('active')) {
            document.querySelector('header .material-icons').innerHTML = "close";
        }
        else {
            document.querySelector('header .material-icons').innerHTML = "menu";
        }
    }

    //Fermeture de menu pour le mode mobile
    const closeMenu = () => {
        const menu = document.querySelector('.header-menu');
        menu.classList.remove('active');
        document.querySelector('header .material-icons').innerHTML = "menu";
    }

//Gestion des modals pour les projets
    // Obtenir le modal
    var modal = document.getElementById("myModal");
    var modalYellowaves = document.getElementById("myModalYellowaves");
    var modalRaclavel = document.getElementById("myModalRaclavel");
    var modalRpg = document.getElementById("myModalRpg");

    // Obtenir le bouton qui ouvre le modal
    var btn = document.getElementById("openModalBtn");
    var btnYellowaves = document.getElementById("openModalBtnYellowaves");
    var btnRaclavel = document.getElementById("openModalBtnRaclavel");
    var btnRpg = document.getElementById("openModalBtnRpg");

    // Obtenir l'élément <span> qui ferme le modal
    var span = document.getElementsByClassName("close")[0];
    var spanYellowaves = document.getElementsByClassName("closeYellowaves")[0];
    var spanRaclavel = document.getElementsByClassName("closeRaclavel")[0];
    var spanRpg = document.getElementsByClassName("closeRpg")[0];

    // Lorsque l'utilisateur clique sur le bouton, ouvrir le modal
    btnYellowaves.onclick = function() {
        modalYellowaves.style.display = "block";
    }
    btnYellowaves.onclick = function() {
        modalYellowaves.style.display = "block";
    }
    btnRaclavel.onclick = function() {
        modalRaclavel.style.display = "block";
    }
    btnRpg.onclick = function() {
        modalRpg.style.display = "block";
    }

    // Lorsque l'utilisateur clique sur <span> (x), fermer le modal
    spanYellowaves.onclick = function() {
        modalYellowaves.style.display = "none";
    }
    spanRaclavel.onclick = function() {
        modalRaclavel.style.display = "none";
    }
    spanRpg.onclick = function() {
        modalRpg.style.display = "none";
    }

    // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermer le modal
    window.onclick = function(event) {
        if (event.target == modalYellowaves) {
            modalYellowaves.style.display = "none";
        }
    }
    window.onclick = function(event) {
        if (event.target == modalRaclavel) {
            modalRaclavel.style.display = "none";
        }
    }
    window.onclick = function(event) {
        if (event.target == modalRpg) {
            modalRpg.style.display = "none";
        }
    }
//Fin modal

//Carousel 1
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button--right');
const prevButton = document.querySelector('.carousel-button--left');

const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    let nextSlide = currentSlide.nextElementSibling;

    if (!nextSlide) {
        nextSlide = slides[0];
    }

    moveToSlide(track, currentSlide, nextSlide);
});

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    let prevSlide = currentSlide.previousElementSibling;

    if (!prevSlide) {
        prevSlide = slides[slides.length - 1];
    }

    moveToSlide(track, currentSlide, prevSlide);
});

// Set the first slide as the current slide
const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));

//Fin carousel 1
