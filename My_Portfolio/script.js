// Navigation menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Typewriter effect
const typewriterText = document.getElementById('typewriter-text');
const textArray = [ 'AI & Data Science Student', 'Web Developer'];
let textIndex = 0;
let charIndex = 0;

function typeWriter() {
    if (charIndex < textArray[textIndex].length) {
        typewriterText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(eraseText, 2000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typewriterText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeWriter, 500);
    }
}

// Start the typewriter effect when page loads
window.addEventListener('load', () => {
    if (typewriterText) {
        setTimeout(typeWriter, 1000);
    }
});

// Load particles.js for background effect
document.addEventListener('DOMContentLoaded', function() {
    // Check if particles-js element exists
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer) {
        // Add particles.js script dynamically
        const particlesScript = document.createElement('script');
        particlesScript.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        particlesScript.onload = function() {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#6c63ff'
                    },
                    shape: {
                        type: 'circle'
                    },
                    opacity: {
                        value: 0.5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 2,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#6c63ff',
                        opacity: 0.2,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'grab'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            line_linked: {
                                opacity: 0.5
                            }
                        },
                        push: {
                            particles_nb: 4
                        }
                    }
                },
                retina_detect: true
            });
        };
        document.body.appendChild(particlesScript);
    }
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple form validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        // In a real application, you would send this data to a server
        // For now, we'll just simulate a successful submission
        alert('Thanks for your message! I\'ll get back to you soon.');
        contactForm.reset();
    });
}

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.section-header, .timeline-item, .exp-item, .project-card, .cert-card, .skill-item, .about-details .detail');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
}

// Add animation class to CSS
document.head.insertAdjacentHTML('beforeend', `
<style>
.section-header, .timeline-item, .exp-item, .project-card, .cert-card, .skill-item, .about-details .detail {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.5s ease, transform 0.8s ease;
}

.section-header.animate, .timeline-item.animate, .exp-item.animate, .project-card.animate, .cert-card.animate, .skill-item.animate, .about-details .detail.animate {
    opacity: 1;
    transform: translateY(0);
}
</style>
`);

// Run animations when page loads and on scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});