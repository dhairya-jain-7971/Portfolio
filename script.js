document.addEventListener('DOMContentLoaded', () => {
  // Initialize particles.js only if the container exists
  const particlesContainer = document.getElementById('particles-js');
  if (particlesContainer) {
    try {
      particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#00ffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#00ffff",
            "opacity": 0.2,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_opacity": 0.5
            },
            "push": {
              "particles_nb": 4
            }
          }
        },
        "retina_detect": true
      });
    } catch (error) {
      console.error('Error initializing particles.js:', error);
    }
  }

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
      }
    });
  });

  const revealElements = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  };



});