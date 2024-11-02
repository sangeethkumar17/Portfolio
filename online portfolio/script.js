// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // script.js

window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// Function to adjust the navbar style on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const maxScroll = 300; // Maximum scroll distance for full transparency

    // Get the current scroll position
    const scrollTop = window.scrollY;

    // Apply styles based on scroll position
    if (scrollTop > 0) {
        navbar.classList.add('navbar-glass');
        navbar.style.backgroundColor = `rgba(36, 36, 65, ${Math.max(0.3, 1 - scrollTop / maxScroll)})`;
    } else {
        navbar.classList.remove('navbar-glass');
        navbar.style.backgroundColor = 'rgb(36, 36, 65)'; // Reset to solid blue at top
    }
});


// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to toggle the dropdown menu
document.getElementById('hamburger').addEventListener('click', function() {
    const content = document.getElementById('content');
    content.classList.toggle('active'); // Use toggle for simplicity
});

// Scroll event for navbar styling
window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to toggle the dropdown menu
document.getElementById('hamburger').addEventListener('click', function() {
    const content = document.getElementById('content');
    content.classList.toggle('active'); // Toggle the active class
});

// Scroll event for navbar styling
window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

