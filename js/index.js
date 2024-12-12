// Selecciona el contenedor del carousel
const carousel = document.querySelector('.carousel');

// Selecciona los textos del carousel
const carouselItems = document.querySelectorAll('.carousel-item');

// Selecciona las flechas para navegar
const prevButton = document.querySelector('#anterior');
const nextButton = document.querySelector('#siguiente');

// Selecciona el contenedor #somos
const somosContainer = document.querySelector('#somos');

// Establece el índice actual del carousel
let currentIndex = 0;

// Muestra el primer texto
carouselItems[currentIndex].style.display = 'block';

// Función para mostrar el siguiente texto
function showNextText() {
  // Oculta el texto actual
  carouselItems[currentIndex].style.display = 'none';
  
  // Aumenta el índice actual
  currentIndex = (currentIndex + 1) % carouselItems.length;
  
  // Muestra el siguiente texto
  carouselItems[currentIndex].style.display = 'block';
}

// Función para mostrar el texto anterior
function showPrevText() {
  // Oculta el texto actual
  carouselItems[currentIndex].style.display = 'none';
  
  // Disminuye el índice actual
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  
  // Muestra el texto anterior
  carouselItems[currentIndex].style.display = 'block';
}

// Agrega eventos a las flechas para navegar
prevButton.addEventListener('click', showPrevText);
nextButton.addEventListener('click', showNextText);

// Establece el intervalo para el movimiento automático
setInterval(showNextText, 10000); 