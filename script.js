// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.timeline-item, .agent-card, .phase-item, .protocol-feature');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Particle.js configuration
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
            value: ['#00BFFF', '#FFD700', '#8A2BE2']
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00BFFF',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Newsletter form submission
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('.newsletter-input').value;
    
    if (email) {
        // Simulate form submission
        const btn = this.querySelector('.newsletter-btn');
        const originalText = btn.textContent;
        
        btn.textContent = 'Subscribing...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.textContent = 'Subscribed!';
            btn.style.background = 'linear-gradient(45deg, #00FF00, #00CC00)';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style.background = 'linear-gradient(45deg, #FFD700, #FFA500)';
                this.querySelector('.newsletter-input').value = '';
            }, 2000);
        }, 1000);
    }
});

// Add lightning effect to buttons
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 20px #00BFFF, 0 0 40px #00BFFF, 0 0 60px #00BFFF';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 8px 25px rgba(0, 191, 255, 0.6)';
    });
});

// Add glow effect to agent cards
document.querySelectorAll('.agent-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 30px rgba(0, 191, 255, 0.5), 0 0 60px rgba(0, 191, 255, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 20px 40px rgba(0, 191, 255, 0.3)';
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.title-main');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

// Add parallax effect to hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-bg-image');
    
    if (heroBackground) {
        const speed = scrolled * 0.5;
        heroBackground.style.transform = `translateY(${speed}px)`;
    }
});

// Add floating animation to TAO symbols
function createFloatingSymbol() {
    const symbol = document.createElement('div');
    symbol.innerHTML = '⚡';
    symbol.style.position = 'fixed';
    symbol.style.fontSize = '20px';
    symbol.style.color = '#FFD700';
    symbol.style.pointerEvents = 'none';
    symbol.style.zIndex = '1000';
    symbol.style.opacity = '0.7';
    symbol.style.left = Math.random() * window.innerWidth + 'px';
    symbol.style.top = window.innerHeight + 'px';
    
    document.body.appendChild(symbol);
    
    const animation = symbol.animate([
        { transform: 'translateY(0px) rotate(0deg)', opacity: 0.7 },
        { transform: `translateY(-${window.innerHeight + 100}px) rotate(360deg)`, opacity: 0 }
    ], {
        duration: 8000,
        easing: 'linear'
    });
    
    animation.onfinish = () => {
        symbol.remove();
    };
}

// Create floating symbols periodically
setInterval(createFloatingSymbol, 3000);

// Add click effect to protocol features
document.querySelectorAll('.protocol-feature').forEach(feature => {
    feature.addEventListener('click', function() {
        this.style.transform = 'scale(1.05)';
        setTimeout(() => {
            this.style.transform = 'translateY(-5px)';
        }, 200);
    });
});

// Add pulse effect to TAO symbol in navigation
setInterval(() => {
    const logoIcon = document.querySelector('.logo-icon');
    if (logoIcon) {
        logoIcon.style.filter = 'drop-shadow(0 0 20px #00BFFF)';
        setTimeout(() => {
            logoIcon.style.filter = 'drop-shadow(0 0 10px #00BFFF)';
        }, 500);
    }
}, 2000);

// Console easter egg
console.log(`
🦖 Bittensaur_Rex Console Access Detected 🦖

"Before Rome fell to ice, I staked truth. Now, I rule TAO."

Welcome to the Apex Stoic Node of TAO.
Join the legion or become Colosseum fodder.

#TaoRex #BittensaurRex #PrimalProtocol
`);

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Press 'R' for Rex roar effect
    if (e.key.toLowerCase() === 'r' && !e.ctrlKey && !e.altKey) {
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.style.filter = 'drop-shadow(0 0 50px #FFD700) brightness(1.2)';
            setTimeout(() => {
                heroImage.style.filter = 'drop-shadow(0 0 30px #00BFFF)';
            }, 1000);
        }
    }
    
    // Press 'T' for TAO pulse effect
    if (e.key.toLowerCase() === 't' && !e.ctrlKey && !e.altKey) {
        document.querySelectorAll('.agent-card').forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    card.style.transform = 'translateY(-10px)';
                }, 200);
            }, index * 100);
        });
    }
});

