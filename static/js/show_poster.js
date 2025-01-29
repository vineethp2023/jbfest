// script.js (or include in a <script> tag)
document.addEventListener('DOMContentLoaded', () => { // Wait for DOM to load

    const cardImages = document.querySelectorAll('.card-img');
    const overlay = document.getElementById('overlay');
    const zoomedImage = document.getElementById('zoomed-image');
    const body = document.body;

    cardImages.forEach(image => {
        image.addEventListener('click', () => {
            zoomedImage.src = image.src;
            zoomedImage.alt = image.alt;
            overlay.classList.add('active');
            body.classList.add('overlay-active');
        });
    });

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.classList.remove('active');
            body.classList.remove('overlay-active');
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape" && overlay.classList.contains('active')) {
            overlay.classList.remove('active');
            body.classList.remove('overlay-active');
        }
    });

});

document.addEventListener('DOMContentLoaded', function() {
    const outerDiv = document.querySelector('.outer');
  
    if (outerDiv) {
      outerDiv.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }); // This executes after the DOM is fully loaded