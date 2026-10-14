document.addEventListener('DOMContentLoaded', () => {
  /* ---------- mobile menu ---------- */
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  const closeMenu = () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('toggle');
  };

  const toggleMenu = () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
  };

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', toggleMenu);
    hamburger.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      }
    });
  }

  /* ---------- reveal on scroll ---------- */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }

  /* ---------- active nav pill while scrolling ---------- */
  const links = Array.from(document.querySelectorAll('.nav-link'));
  const sections = links
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  links.forEach(link => link.addEventListener('click', closeMenu));

  const setActive = () => {
    const y = window.scrollY + window.innerHeight * 0.3;
    let current = sections[0];

    sections.forEach(section => {
      if (section.offsetTop <= y) current = section;
    });

    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current.id);
    });
  };

  if (sections.length) {
    setActive();
    window.addEventListener('scroll', setActive, { passive: true });
  }
});
