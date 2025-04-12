// Seleccionamos las imágenes del producto
const images = document.querySelectorAll('.producto-imagen');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

// Función para mostrar la imagen en el lightbox
images.forEach(image => {
  image.addEventListener('click', () => {
    lightbox.style.display = 'block';  // Mostrar el lightbox
    lightboxImg.src = image.src;      // Establecer la imagen grande
    caption.textContent = image.alt;  // Establecer el texto alternativo como el título
  });
});

// Función para cerrar el lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';  // Ocultar el lightbox
});

// Cerrar el lightbox si se hace clic fuera de la imagen
window.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
