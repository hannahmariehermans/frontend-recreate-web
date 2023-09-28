document.addEventListener('DOMContentLoaded', () => {
  // Select image elm., button and gallery row
  const images = document.querySelectorAll('.img-gallery');
  const seeMoreButton = document.getElementById('see-more-btn');
  const galleryRow = document.querySelector('.gallery-row');

  function hideImages() {
    const windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      // For mobile view: hide images after the 4th image
      images.forEach((image, index) => {
        if (index >= 4) {
          image.classList.add('hidden');
        } else {
          image.classList.remove('hidden');
        }
      });
    } else {
      // For desktop and tablet view: show all images
      images.forEach((image) => {
        image.classList.remove('hidden');
      });
    }
  }

  function duplicateImages() {
    const clonedImages = Array.from(images).map((image) => {
      // For desktop and tablet view: show all images
      return image.cloneNode(true);
    });

    clonedImages.forEach((clonedImage) => {
      galleryRow.appendChild(clonedImage);
    });

    hideImages();
  }

  hideImages();

  seeMoreButton.addEventListener('click', () => {
    duplicateImages();
  });

  window.addEventListener('resize', () => {
    hideImages();
  });
});
