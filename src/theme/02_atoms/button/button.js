document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('button');

  function updateButtonSize() {
    const windowWidth = window.innerWidth;

    buttons.forEach(function(button) {
      if (windowWidth >= 1024) {
        // Desktop
        button.classList.remove('small');
        button.classList.add('large');
      } else {
        // Mobile and Tablet (no specific class)
        button.classList.remove('large', 'small');
      }
    });
  }

  // Call the function initially
  updateButtonSize();

  // Listen for window resize event
  window.addEventListener('resize', updateButtonSize);
});
