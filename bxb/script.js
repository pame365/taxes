document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });

  // Five-image hero carousel: automatic crossfade, no arrows or dots.
  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  const slideCounter = document.querySelector(".hero-index strong");
  let currentSlide = 0;

  if (slides.length > 1) {
    window.setInterval(() => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
      slideCounter.textContent = String(currentSlide + 1).padStart(2, "0");
    }, 5500); 
  }

  // Current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();
});
