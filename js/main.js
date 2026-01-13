// ===================================
// التداخلات الغذائية الدوائية Nutidrug interact Landing Page
// JavaScript Functionality
// ==================================

// === Language Management ===
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'ar';
        this.init();
    }

    init() {
        this.setLanguage(this.currentLang);
        this.attachEventListeners();
    }

    setLanguage(lang) {
        this.currentLang = lang;
        const html = document.documentElement;

        // Set language and direction
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // Update all translatable elements
        this.updateContent();

        // Update language button text
        const langText = document.getElementById('langText');
        if (langText) {
            langText.textContent = lang === 'ar' ? 'EN' : 'ع';
        }

        // Save preference
        localStorage.setItem('language', lang);
    }

    updateContent() {
        const elements = document.querySelectorAll('[data-ar][data-en]');
        elements.forEach(element => {
            const content = this.currentLang === 'ar' ? element.dataset.ar : element.dataset.en;
            if (content) {
                element.textContent = content;
            }
        });
    }

    toggleLanguage() {
        const newLang = this.currentLang === 'ar' ? 'en' : 'ar';
        this.setLanguage(newLang);
    }

    attachEventListeners() {
        const langSwitch = document.getElementById('langSwitch');
        if (langSwitch) {
            langSwitch.addEventListener('click', () => this.toggleLanguage());
        }
    }
}

// === Smooth Scroll ===
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = target.offsetTop - navHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// === Scroll to Top Button ===
class ScrollToTop {
    constructor() {
        this.button = document.getElementById('scrollTop');
        this.init();
    }

    init() {
        if (!this.button) return;

        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                this.button.classList.add('visible');
            } else {
                this.button.classList.remove('visible');
            }
        });

        // Scroll to top on click
        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// === Animated on Scroll ===
class AnimateOnScroll {
    constructor() {
        this.elements = [];
        this.init();
    }

    init() {
        // Get all elements to animate
        this.elements = document.querySelectorAll('.feature-card, .about-card, .stat');

        // Create intersection observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-on-scroll');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all elements
        this.elements.forEach(el => observer.observe(el));
    }
}

// === Navbar Scroll Effect ===
class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.init();
    }

    init() {
        if (!this.navbar) return;

        // Highlight active link based on current page
        this.highlightActiveLink();

        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            // Add shadow on scroll
            if (currentScroll > 10) {
                this.navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
            } else {
                this.navbar.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
            }

            lastScroll = currentScroll;
        });
    }

    highlightActiveLink() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (currentPath.endsWith(href) || (currentPath === '/' && href === 'index.html') || (currentPath.endsWith('/') && href === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

// === Download Button Handler ===
class DownloadHandler {
    constructor() {
        this.init();
    }

    init() {
        const downloadBtns = document.querySelectorAll('.download-btn');
        if (downloadBtns.length > 0) {
            downloadBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.handleDownload();
                });
            });
        }
    }

    handleDownload() {
        const currentLang = document.documentElement.getAttribute('lang');
        const message = currentLang === 'ar'
            ? 'رابط التحميل سيكون متاحاً قريباً. سيتم إضافة الرابط بعد رفع ملف APK إلى GitHub Releases.'
            : 'Download link will be available soon. The link will be added after uploading the APK file to GitHub Releases.';

        alert(message);

        // TODO: Replace with actual download link from GitHub Releases
        // window.location.href = 'YOUR_GITHUB_RELEASE_URL';
    }
}

// === Performance Optimizations ===
class PerformanceOptimizations {
    constructor() {
        this.init();
    }

    init() {
        // Lazy load images
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                img.src = img.dataset.src;
            });
        } else {
            // Fallback for browsers that don't support lazy loading
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
            document.body.appendChild(script);
        }
    }
}

// === Initialize All Modules ===
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language manager
    new LanguageManager();

    // Initialize smooth scroll
    new SmoothScroll();

    // Initialize scroll to top button
    new ScrollToTop();

    // Initialize scroll animations
    new AnimateOnScroll();

    // Initialize navbar scroll effect
    new NavbarScroll();

    // Initialize download handler
    new DownloadHandler();

    // Initialize performance optimizations
    new PerformanceOptimizations();

    // Log successful initialization
    console.log('%c✅ Nutidrug interact Landing Page Initialized', 'color: #10b981; font-size: 16px; font-weight: bold;');
    console.log('%c📱 Developer: Feras Swed', 'color: #2563eb; font-size: 14px;');
});

// === Utility Functions ===

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Get scroll position
function getScrollPosition() {
    return window.pageYOffset || document.documentElement.scrollTop;
}

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        LanguageManager,
        SmoothScroll,
        ScrollToTop,
        AnimateOnScroll,
        NavbarScroll,
        DownloadHandler,
        debounce,
        isInViewport,
        getScrollPosition
    };
}
