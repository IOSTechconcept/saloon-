
// Mobile menu toggle
const menuIcon = document.querySelector('.menu-icon');
const navUl = document.querySelector('nav ul');

if (menuIcon && navUl) {
    menuIcon.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in effect on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Slide-in effect for hero text
const heroH2 = document.getElementById('hero-h2');
const heroP = document.getElementById('hero-p');

function slideInHeroText() {
    heroH2.classList.add('hidden');
    heroP.classList.add('hidden');

    setTimeout(() => {
        heroH2.classList.remove('hidden');
        heroP.classList.remove('hidden');
        heroH2.classList.add('slide-in');
        heroP.classList.add('slide-in');
    }, 100);

    setTimeout(() => {
        heroH2.classList.remove('slide-in');
        heroP.classList.remove('slide-in');
    }, 1100); // Animation duration is 1s
}

if (heroH2 && heroP) {
    // Initial animation
    slideInHeroText();

    // Subsequent animations every 5 seconds
    setInterval(slideInHeroText, 5000);
}
