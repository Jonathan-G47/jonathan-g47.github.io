const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-menu');
const menu = document.getElementById('menu');
// Selecciona todos los elementos con la clase .fade-in
const faders = document.querySelectorAll('.fade-in');



const abrirMenu = () =>{
    menu.style.display = 'flex';
    mobileMenu.style.display = 'flex';
    closeBtn.style.display = 'block';

      // Cerrar menú si se hace clic fuera
    window.addEventListener('click', (event) =>{
    if(event.target == menu){
        menu.style.display = 'none';
    }
    })


  // Cerrar menú al hacer clic en un enlace
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
        menu.style.display = 'none';
    });
});


  // Cerrar menú al hacer clic en el botón ✕
closeBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    menu.style.display = 'none'; 
});

} 

// Abrir menú al hacer clic en el ícono
hamburger.addEventListener('click', abrirMenu);



// Crea un observador que detecta cuando el elemento entra en el viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Si el elemento es visible en pantalla (al menos 30%)
    if (entry.isIntersecting) {
      // Añade la clase .visible para activar la animación
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.3 // Porcentaje mínimo visible para activar el efecto
});

// Aplica el observador a cada elemento .fade-in
faders.forEach(el => observer.observe(el));
