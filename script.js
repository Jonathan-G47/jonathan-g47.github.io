// ======================================================
//  SCRIPT PRINCIPAL DEL PORTAFOLIO
//  Limpio, optimizado y documentado en español
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    // --------------------------------------------------
    // ELEMENTOS DEL DOM
    // --------------------------------------------------
    const header = document.querySelector("header");
    const heroSubtitle = document.getElementById("rotating-profession");
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    // --------------------------------------------------
    // 1. EFECTO DE TEXTO ROTATIVO (PROFESIONES)
    // --------------------------------------------------
    // Lista de profesiones que quieres mostrar
    const profesiones = [
        "Desarrollador Frontend",
        "Diseñador UI",
        "Desarrollador Web",
        "React Developer",
        "Apasionado por el Código Limpio"
    ];

    let index = 0;
    let charIndex = 0;
    let borrando = false;

    function escribir() {
        const textoActual = profesiones[index];

        if (!borrando) {
            heroSubtitle.textContent = textoActual.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === textoActual.length) {
                borrando = true;
                setTimeout(escribir, 1500);
                return;
            }
        } else {
            heroSubtitle.textContent = textoActual.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                borrando = false;
                index = (index + 1) % profesiones.length;
            }
        }

        setTimeout(escribir, borrando ? 80 : 120);
    }

    escribir();

    // --------------------------------------------------
    // 2. MENÚ MÓVIL (ABRIR / CERRAR)
    // --------------------------------------------------
    function toggleMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    hamburger?.addEventListener("click", toggleMenu);

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });

    // --------------------------------------------------
    // 3. EFECTO DEL HEADER AL HACER SCROLL
    // --------------------------------------------------
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // --------------------------------------------------
    // 4. FORMULARIO → ENVIAR A WHATSAPP
    // --------------------------------------------------
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const message = document.getElementById("message").value;

            const text = `Nuevo mensaje desde tu portafolio:%0A
Nombre: ${name}%0A
Correo: ${email}%0A
Teléfono: ${phone}%0A
Mensaje: ${message}`;

            const whatsappURL = `https://wa.me/5356269873?text=${text}`;

            window.open(whatsappURL, "_blank");
        });
    }

    // --------------------------------------------------
// 5. ACTUALIZAR LINK ACTIVO DEL NAVBAR SEGÚN SCROLL
// --------------------------------------------------

// Función para activar el link correcto
function updateActiveNavLink(id) {
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === id) {
            link.classList.add("active");
        }
    });
}

// Detectar qué sección está visible
function updateActiveNavFromScroll() {
    const sections = document.querySelectorAll("section[id], footer[id]");
    const scrollPos = window.scrollY + 120; // margen para header

    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
            const id = "#" + section.getAttribute("id");
            updateActiveNavLink(id);
        }
    });
}

// Listener de scroll
window.addEventListener("scroll", updateActiveNavFromScroll);

// Activar link al hacer clic
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        updateActiveNavLink(link.getAttribute("href"));
    });
});

});
