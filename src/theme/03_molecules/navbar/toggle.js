document.addEventListener('DOMContentLoaded', () => {
    const navSlide = () => {
      const burger = document.querySelector('.burger');
      const nav = document.querySelector('.nav-links');
  
      burger.addEventListener('click', () => {
        // Toggle
        nav.classList.toggle('nav-active');
  
        // Burger animation
        burger.classList.toggle('toggle');
      });
    };
  
    navSlide();
  });
