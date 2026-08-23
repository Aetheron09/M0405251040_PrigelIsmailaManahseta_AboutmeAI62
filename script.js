// ================================
// Mobile Navigation Toggle
// ================================

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// ================================
// Scroll Effects
// ================================

let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow on scroll
    if (currentScroll > 10) {
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    } else {
        nav.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ================================
// Active Section Highlighting
// ================================

const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ================================
// Smooth Scroll with Offset
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// Intersection Observer for Animations
// ================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for fade-in animation
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ================================
// Profile Photo Error Handling
// ================================

const profileImg = document.querySelector('.profile-photo img');
const profilePlaceholder = document.querySelector('.profile-placeholder');

if (profileImg) {
    profileImg.addEventListener('error', function() {
        this.style.display = 'none';
        if (profilePlaceholder) {
            profilePlaceholder.style.display = 'flex';
        }
    });

    // Check if image loaded successfully
    if (profileImg.complete && profileImg.naturalHeight === 0) {
        profileImg.style.display = 'none';
        if (profilePlaceholder) {
            profilePlaceholder.style.display = 'flex';
        }
    }
}

// ================================
// Download CV Button Handler
// ================================

const downloadBtn = document.querySelector('.btn-download');

if (downloadBtn) {
    downloadBtn.addEventListener('click', function(e) {
        // Check if CV file exists
        fetch('CV.pdf')
            .then(response => {
                if (!response.ok) {
                    e.preventDefault();
                    alert('CV file not found. Please add your CV as CV.pdf in the root directory.');
                }
            })
            .catch(() => {
                e.preventDefault();
                alert('CV file not found. Please add your CV as CV.pdf in the root directory.');
            });
    });
}

// ================================
// Dynamic Year in Footer
// ================================

const updateFooterYear = () => {
    const footerYear = document.querySelector('.footer-content p.monospace');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.textContent = `© ${currentYear} Prigel Ismaila Manahseta`;
    }
};

updateFooterYear();

// ================================
// Skills Tags Interaction
// ================================

const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('click', () => {
        tag.style.transform = 'scale(0.95)';
        setTimeout(() => {
            tag.style.transform = 'scale(1)';
        }, 100);
    });
});

// ================================
// Console Message
// ================================

console.log('%c👋 Hi there!', 'font-size: 20px; font-weight: bold;');
console.log('%cWelcome to my portfolio. If you\'re interested in AI projects or collaboration, feel free to reach out!', 'font-size: 14px;');
console.log('%c✉️ prigelismaila@apps.ipb.ac.id', 'font-size: 14px; color: #2563eb;');
