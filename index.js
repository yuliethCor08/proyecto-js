window.onscroll = function() {
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
  };

document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del DOM
    const navMenu = document.querySelector('.nav__menu');
    const navMenuToggle = document.querySelector('.nav__menu-toggle');
    const progressBar = document.getElementById('progress-bar');
  
    // Mostrar/ocultar menú de navegación en dispositivos móviles
    navMenuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('nav__link--show');
    });
  
    // Barra de progreso al hacer scroll
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
  
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
      progressBar.style.width = scrollPercentage + '%';
    });
  });