document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-item');
    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    // Theme toggle
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            body.classList.toggle("dark");
            // Change icon
            if (body.classList.contains("dark")) {
                toggleBtn.textContent = "☀️";
                localStorage.setItem("theme", "dark");
            } else {
                toggleBtn.textContent = "🌙";
                localStorage.setItem("theme", "light");
            }
        });
    }

    // Hamburger menu toggle
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Nav item click
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            // Add active class to clicked link
            const link = item.querySelector('.nav-link');
            if (link) link.classList.add('active');
            // Close mobile menu if open
            if (navLinks && navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
});

// Slider functionality
const slides = document.querySelectorAll('.slide');
        let currentIndex = 0;
        const slideInterval = 3000; // 3 seconds
        setInterval(() => {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }, slideInterval);


        // Scroll animation functionality
function checkScroll() {
    const mainSection = document.querySelector('.main-section');
    const sectionPosition = mainSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        mainSection.classList.add('animate');
    }
}

// Check on scroll and on load
window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

//codes for testimonials slider
// Scroll animation for testimonials
ScrollReveal().reveal('.scroll-animate', {
  distance: '60px',
  duration: 1200,
  easing: 'ease-in-out',
  origin: 'bottom',
  interval: 200
});


//footer
    // Create beer bubbles
        function createBubbles() {
            const bubblesContainer = document.getElementById('bubbles');
            const bubbleCount = 20;
            
            for (let i = 0; i < bubbleCount; i++) {
                const bubble = document.createElement('div');
                bubble.classList.add('bubble');
                
                // Random properties for each bubble
                const size = Math.random() * 30 + 10;
                const left = Math.random() * 100;
                const animationDelay = Math.random() * 15;
                const animationDuration = Math.random() * 10 + 15;
                
                bubble.style.width = `${size}px`;
                bubble.style.height = `${size}px`;
                bubble.style.left = `${left}%`;
                bubble.style.animationDelay = `${animationDelay}s`;
                bubble.style.animationDuration = `${animationDuration}s`;
                
                bubblesContainer.appendChild(bubble);
            }
        }
        
        // Initialize bubbles when page loads
        document.addEventListener('DOMContentLoaded', createBubbles);
        
        // Newsletter form submission
        document.querySelector('.newsletter-btn').addEventListener('click', function() {
            const emailInput = document.querySelector('.newsletter-input');
            if (emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            } else {
                alert('Please enter your email address.');
            }
        });
    document.getElementById('year').textContent = new Date().getFullYear();
        //About us page
        
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// Count-up stats when visible
const counters = document.querySelectorAll('.stat-number');
const speed = 40; // lower = faster

function runCount(el, target) {
  let start = 0;
  const step = Math.ceil(target / (1000 / speed));
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = start;
    }
  }, speed);
}

if ('IntersectionObserver' in window) {
  const obs = new IntersectionObserver((entries, observer)=> {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10) || 0;
        runCount(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => obs.observe(c));
} else {
  // fallback: run immediately
  counters.forEach(c => runCount(c, parseInt(c.dataset.target || 0)));
}
