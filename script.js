// Record the time when the script starts
const loadStartTime = Date.now();

// Preloader
window.onload = function() {
    const minDisplayTime = 3000; // 3 seconds
    const loadTime = Date.now() - loadStartTime;

    const hidePreloader = () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }
        // Initialize animations after preloader is gone
        initializeAnimations();
    };

    // Wait for at least minDisplayTime before hiding the preloader
    const remainingTime = minDisplayTime - loadTime;
    setTimeout(hidePreloader, remainingTime > 0 ? remainingTime : 0);
};


// Mobile menu toggle
const menuIcon = document.querySelector('.menu-icon');
const navUl = document.querySelector('nav ul');

if (menuIcon && navUl) {
    menuIcon.addEventListener('click', () => {
        navUl.classList.toggle('show');
        const isExpanded = menuIcon.getAttribute('aria-expanded') === 'true' || false;
        menuIcon.setAttribute('aria-expanded', !isExpanded);
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

function initializeAnimations() {
    // Roll-in animation for nav items
    const navItems = document.querySelectorAll('nav ul li');
    navItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('roll-in');
        }, index * 500); // 0.5 second delay
    });

    // Staggered animation for service items
    const serviceItems = document.querySelectorAll('.service-item.stagger-in');
    serviceItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 150);
    });

    // Fade-in effect on scroll
    const faders = document.querySelectorAll('.fade-in');

    const fadeInOnScroll = () => {
        faders.forEach(fader => {
            const faderTop = fader.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (faderTop < windowHeight - 50) { // 50px buffer
                fader.classList.add('appear');
            }
        });
    };

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Run once on load
}

// Price button dropdown
document.addEventListener('DOMContentLoaded', function () {
    const priceButtons = document.querySelectorAll('.price-button');

    priceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const dropdown = button.nextElementSibling;
            dropdown.classList.toggle('active');
        });
    });
});