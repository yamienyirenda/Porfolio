document.addEventListener("DOMContentLoaded", () => {

  // ===== TYPING ANIMATION =====
  if (document.querySelector("#typed-text")) {
    new Typed("#typed-text", {
      strings: ["Senior Developer", "UI/UX Designer", "Tech Enthusiast"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });
  }

  // ===== DARK / LIGHT MODE TOGGLE =====
  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    });
    if (localStorage.getItem("darkMode") === "true") {
      document.body.classList.add("dark-mode");
    }
  }

  // ===== PARTICLES JS =====
  if (document.getElementById("particles-js")) {
    particlesJS.load("particles-js", "particles.json", () => {
      console.log("Particles.js loaded");
    });
  }

});

// ===== SIDE NAV LOGIC =====
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
/* ===== SCROLL REVEAL EFFECT ===== */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  reveals.forEach((reveal) => {
    const revealTop = reveal.getBoundingClientRect().top;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run on page load
