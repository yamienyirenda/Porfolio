// Typing Animation
const typed = new Typed('#typed-text', {
    strings: ["Senior Developer", "UI/UX Designer", "Tech Enthusiast"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Dark/Light Mode Toggle
document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Initialize Particles
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js loaded - callback executed');
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Load dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
    
    // Initialize counters
    setTimeout(animateCounters, 500);
});