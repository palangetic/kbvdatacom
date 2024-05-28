//animacija naslova
const titleElement = document.getElementById('animated-title');
const text = 'Ko smo mi?';
let index = 0;

function animateTitle() {
  titleElement.textContent = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 0;
  }
}

setInterval(animateTitle, 200); // Promena teksta svakih 200ms
