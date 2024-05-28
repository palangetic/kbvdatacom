//za otvaranje hamburger menija

document.querySelector('.menu-toggle').addEventListener('click', function () {
  this.classList.toggle('active');
  var menu = document.querySelector('.menu');
  menu.classList.toggle('active');
});

const slides = document.querySelector('.slides');
const slideWidth = slides.clientWidth;
const totalSlides = document.querySelectorAll('.slide').length;
let currentSlide = 1;

function goToSlide(slideIndex) {
  slides.style.transform = `translateX(-${slideWidth * (slideIndex - 1)}px)`;
  currentSlide = slideIndex;
}

function nextSlide() {
  if (currentSlide < totalSlides) {
    goToSlide(currentSlide + 1);
  } else {
    goToSlide(1);
  }
}

function prevSlide() {
  if (currentSlide > 1) {
    goToSlide(currentSlide - 1);
  } else {
    goToSlide(totalSlides);
  }
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Automatsko prebacivanje na sledeći slajd svakih 4 sekunde
setInterval(nextSlide, 4000);
