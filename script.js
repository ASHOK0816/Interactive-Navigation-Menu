document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('.nav-item');
    
    navLinks.forEach(function(navLink) {
      navLink.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust for fixed navbar height
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Change style of menu items on hover
    navLinks.forEach(function(navLink) {
      navLink.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
      });
      navLink.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
      });
    });
  
    // Change background color on scroll
    window.addEventListener("scroll", function() {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  });
  