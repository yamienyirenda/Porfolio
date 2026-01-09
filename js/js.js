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

  // ===== COUNTER ANIMATION =====
  function animateCounters() {
    const counters = document.querySelectorAll(".stat-number");

    counters.forEach(counter => {
      const target = +counter.dataset.target;
      let count = 0;
      const increment = target / 200;

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }

  // Delay counter animation slightly
  if (document.querySelector(".stat-number")) {
    setTimeout(animateCounters, 500);
  }

  // ===== DARK / LIGHT MODE TOGGLE =====
  const themeToggle = document.querySelector(".theme-toggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark-mode")
      );
    });
  }

  // Load saved theme
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }

  // ===== PARTICLES JS =====
  if (document.getElementById("particles-js")) {
    particlesJS.load("particles-js", "particles.json", () => {
      console.log("Particles.js loaded");
    });
  }

  // ===== MOBILE MENU TOGGLE =====
  const menuBtn = document.querySelector(".side-menu");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", (e) => {
        console.log("Burger clicked");
      e.stopPropagation();
      navLinks.classList.toggle("active");
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".header-container")) {
        navLinks.classList.remove("active");
      }
    });
  }

});
