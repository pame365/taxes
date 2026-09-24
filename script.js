/* =========================
   MENÚ CELULAR
========================= */

function mostrarMenu() {

    const menu = document.getElementById("menu");

    menu.classList.toggle("active");

}


/* =========================
   DROPDOWNS EN CELULAR
========================= */

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {

    const button = dropdown.querySelector(".dropbtn");

    button.addEventListener("click", function(event) {

        if (window.innerWidth <= 700) {

            event.preventDefault();

            dropdown.classList.toggle("active");

        }

    });

});


/* =========================
   CERRAR MENU AL HACER CLICK
========================= */

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function() {

        if (window.innerWidth <= 700) {

            document
                .getElementById("menu")
                .classList.remove("active");

        }

    });

});


/* =========================
   BOTÓN VOLVER ARRIBA
========================= */

window.addEventListener("scroll", function() {

    const boton = document.getElementById("topBtn");

    if (window.scrollY > 400) {

        boton.style.display = "block";

    } else {

        boton.style.display = "none";

    }

});


function subirArriba() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}