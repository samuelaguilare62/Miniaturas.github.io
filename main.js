

function openModal(src) {
    const modalImage = document.getElementById('modalImage');

    // Configurar la fuente de la imagen en el modal
    modalImage.src = src;

    // Mostrar el modal
    document.getElementById('imageModal').style.display = 'flex';
}




function closeModal() {
    // Limpiar la fuente de la imagen en el modal
    document.getElementById('modalImage').src = '';

    // Ocultar el modal
    document.getElementById('imageModal').style.display = 'none';
}

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

const imageSlider = document.getElementById('image-slider');

let currentIndex = 0;

function showImage(index) {
  // Actualiza la posición del carrusel
  const translateValue = -index * 100 + '%';
  imageSlider.style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % imageSlider.children.length;
  showImage(currentIndex);
}

// Configura el intervalo para cambiar automáticamente las imágenes
setInterval(nextSlide, 3000);

// Muestra la primera imagen al cargar la página
showImage(currentIndex);


let myCurrentIndex = 0;
let dragging = false;
let dragStartX = 0;

function myShowSlide(index) {
  const myCarousel = document.getElementById('my-carousel');
  const totalSlides = document.querySelectorAll('.my-iframe-container').length;
  index = Math.min(Math.max(index, 0), totalSlides - 1);
  myCurrentIndex = index;
  const translateValue = -index * (560 + 10) + 'px'; // Ancho del iframe más el margen derecho
  myCarousel.style.transform = 'translateX(' + translateValue + ')';
  updateThumbPosition();
}

function myPrevSlide() {
  myShowSlide(myCurrentIndex - 1);
}

function myNextSlide() {
  myShowSlide(myCurrentIndex + 1);
}

function startDragging(event) {
  dragging = true;
  dragStartX = event.clientX || event.touches[0].clientX;
}

function drag(event) {
  if (!dragging) return;

  const currentX = event.clientX || event.touches[0].clientX;
  const deltaX = currentX - dragStartX;

  if (deltaX > 50) {
    myPrevSlide();
    dragging = false;
  } else if (deltaX < -50) {
    myNextSlide();
    dragging = false;
  }
}

function stopDragging() {
  dragging = false;
}

function updateThumbPosition() {
  const myCarousel = document.getElementById('my-carousel');
  const scrollbar = document.getElementById('scrollbar');
  const thumb = document.getElementById('thumb');

  const carouselWidth = myCarousel.scrollWidth;
  const viewportWidth = myCarousel.clientWidth;

  const thumbWidth = (viewportWidth / carouselWidth) * 100;
  const thumbPosition = (myCarousel.scrollLeft / (carouselWidth - viewportWidth)) * 100;

  thumb.style.width = thumbWidth + '%';
  thumb.style.left = thumbPosition + '%';
}