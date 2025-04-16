// Typing Animation
const typed = new Typed('#typed-text', {
    strings: ["Senior Developer", "UI/UX Designer", "Tech Enthusiast"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Counter Animation
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            const updateCount = () => {
                const newCount = Math.ceil(count + increment);
                counter.innerText = newCount > target ? target : newCount;
                if (newCount < target) {
                    setTimeout(updateCount, 1);
                }
            };
            updateCount();
        }
    });
});

// Dark/Light Mode Toggle
document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Check for saved preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Particles.js Background
particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('Particles.js loaded');
});