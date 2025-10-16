/**
 * Portfolio - Krushal Hirpara
 * Handles all interactive functionality with performance optimization and security
 */

/* Utility Functions */


const throttle = (func, limit) => {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

/* DOM Element Caching System */


const domCache = new Map();

function cacheElements() {
    if (domCache.size > 0) return;

    try {
        const elements = {
            html: document.documentElement,
            themeToggle: document.getElementById('themeToggle'),
            navbar: document.querySelector('.navbar'),
            mobileMenuBtn: document.getElementById('mobileMenuBtn'),
            mobileMenu: document.getElementById('mobileMenu'),
            contactForm: document.getElementById('contactForm'),
            searchInput: document.getElementById('searchInput'),
            heroSubtitle: document.querySelector('.hero-description'),
            sections: document.querySelectorAll('section[id]'),
            projectCards: document.querySelectorAll('#projectsGrid .project-card'),
            filterButtons: document.querySelectorAll('.project-controls .filter-btn')
        };

        // Cache navigation links with null safety
        elements.navLinks = elements.navbar ? 
            elements.navbar.querySelectorAll('.nav-link') : [];

        Object.entries(elements).forEach(([key, value]) => {
            domCache.set(key, value);
        });
    } catch (e) {
        console.error('Element caching failed:', e.message);
        domCache.clear();
    }
}

/* Dark/Light Theme Toggle */


function initThemeToggle() {
    try {
        const themeToggle = domCache.get('themeToggle');
        const html = domCache.get('html');

        if (!themeToggle || !html) {
            console.warn('Theme toggle elements not found');
            return;
        }

        const themeIcon = themeToggle.querySelector('i');
        let savedTheme = 'dark';

        try {
            savedTheme = localStorage.getItem('theme') || 'dark';
        } catch (e) {
            console.warn('localStorage not available, using default theme');
        }

        html.classList.toggle('dark', savedTheme === 'dark');
        updateThemeIcon(savedTheme === 'dark');

        themeToggle.addEventListener('click', handleThemeToggle);

        function handleThemeToggle() {
            try {
                const isDark = html.classList.contains('dark');
                html.classList.toggle('dark');
                const newTheme = isDark ? 'light' : 'dark';

                try {
                    localStorage.setItem('theme', newTheme);
                } catch (e) {
                    console.warn('Failed to save theme preference');
                }

                updateThemeIcon(!isDark);
            } catch (e) {
                console.error('Theme toggle failed:', e.message);
            }
        }

        function updateThemeIcon(isDark) {
            if (themeIcon) {
                themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
    } catch (e) {
        console.error('Theme toggle initialization failed:', e.message);
    }
}

/* Mobile Navigation Menu */


function initMobileMenu() {
    try {
        const mobileMenuBtn = domCache.get('mobileMenuBtn');
        const mobileMenu = domCache.get('mobileMenu');

        if (!mobileMenuBtn || !mobileMenu) {
            console.warn('Mobile menu elements not found');
            return;
        }

        document.addEventListener('click', (e) => {
            try {
                if (e.target.closest('#mobileMenuBtn')) {
                    mobileMenu.classList.toggle('hidden');
                } else if (e.target.closest('#mobileMenu a')) {
                    mobileMenu.classList.add('hidden');
                } else if (!e.target.closest('#mobileMenu') && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            } catch (err) {
                console.warn('Mobile menu click handler error:', err.message);
            }
        });
    } catch (e) {
        console.error('Mobile menu initialization failed:', e.message);
    }
}

/* Navigation Active State Handler */


function updateActiveNav() {
    try {
        const sections = domCache.get('sections');
        const navLinks = domCache.get('navLinks');
        
        if (!sections || sections.length === 0) return;

        const scrollY = window.pageYOffset;
        const activeLinks = new Set();

        navLinks.forEach(link => link.classList.remove('active'));

        sections.forEach((section) => {
            try {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 120;
                const sectionId = section.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                    if (activeLink && !activeLinks.has(activeLink)) {
                        activeLink.classList.add('active');
                        activeLinks.add(activeLink);
                    }
                }
            } catch (e) {
                console.warn('Section processing error:', e.message);
            }
        });
    } catch (e) {
        console.error('Active navigation update failed:', e.message);
    }
}

function handleNavbarScroll() {
    try {
        const navbar = domCache.get('navbar');
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }
    } catch (e) {
        console.warn('Navbar scroll effect error:', e.message);
    }
}

/* Scroll Animations & Effects */


function initIntersectionObserver() {
    try {
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

        const elements = document.querySelectorAll('section > div');
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    } catch (e) {
        console.error('Intersection Observer initialization failed:', e.message);
    }
}

function initTypingAnimation() {
    try {
        const heroSubtitle = domCache.get('heroSubtitle');
        if (!heroSubtitle) return;

        const text = heroSubtitle.textContent;
        heroSubtitle.textContent = '';

        let i = 0;
        let lastTime = 0;
        
        function typeWriter(currentTime) {
            if (currentTime - lastTime >= 100) {
                if (i < text.length) {
                    heroSubtitle.textContent += text.charAt(i);
                    i++;
                    lastTime = currentTime;
                }
            }
            if (i < text.length) {
                requestAnimationFrame(typeWriter);
            }
        }

        setTimeout(() => requestAnimationFrame(typeWriter), 1500);
    } catch (e) {
        console.error('Typing animation initialization failed:', e.message);
        // Fallback to display complete text
        const heroSubtitle = domCache.get('heroSubtitle');
        if (heroSubtitle) heroSubtitle.textContent = heroSubtitle.dataset.text || '';
    }
}

/* Interactive Hover & Click Effects */


function initHoverEffects() {
    try {
        const hoverElements = new WeakMap();

        document.addEventListener('mouseenter', (e) => {
            const card = e.target.closest('.card');
            if (card && !hoverElements.has(card)) {
                card.style.transform = 'translateY(-8px) scale(1.02)';
                card.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                hoverElements.set(card, true);
            } else if (e.target.matches('.skill-tag, .tech-tag')) {
                e.target.style.transform = 'translateY(-2px) scale(1.05)';
                e.target.style.boxShadow = '0 4px 12px rgba(14, 165, 233, 0.3)';
            }
        }, true);

        document.addEventListener('mouseleave', (e) => {
            const card = e.target.closest('.card');
            if (card && hoverElements.has(card)) {
                card.style.transform = '';
                card.style.boxShadow = '';
                hoverElements.delete(card);
            } else if (e.target.matches('.skill-tag, .tech-tag')) {
                e.target.style.transform = '';
                e.target.style.boxShadow = '';
            }
        }, true);
    } catch (e) {
        console.error('Hover effects initialization failed:', e.message);
    }
}

function initButtonEffects() {
    try {
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn-primary');
            if (!btn) return;

            try {
                // Remove any existing ripple effects
                btn.querySelectorAll('.ripple').forEach(ripple => ripple.remove());

                const ripple = document.createElement('span');
                ripple.classList.add('ripple');

                const rect = btn.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                Object.assign(ripple.style, {
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `${x}px`,
                    top: `${y}px`,
                    position: 'absolute',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.3)',
                    transform: 'scale(0)',
                    animation: 'ripple 0.6s linear',
                    pointerEvents: 'none'
                });

                btn.style.position = 'relative';
                btn.style.overflow = 'hidden';
                btn.appendChild(ripple);

                ripple.addEventListener('animationend', () => ripple.remove());
            } catch (err) {
                console.warn('Button ripple effect error:', err.message);
            }
        });
    } catch (e) {
        console.error('Button effects initialization failed:', e.message);
    }
}

/* Page Loading Animation */


function initLoadingAnimation() {
    try {
        Object.assign(document.body.style, {
            opacity: '0',
            transform: 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease'
        });

        window.addEventListener('load', () => {
            Object.assign(document.body.style, {
                opacity: '1',
                transform: 'translateY(0)'
            });
        });
    } catch (e) {
        console.error('Loading animation initialization failed:', e.message);
    }
}

/* Scroll Event Management */


let ticking = false;
const handleScroll = throttle(() => {
    if (!ticking) {
        requestAnimationFrame(() => {
            try {
                updateActiveNav();
                handleNavbarScroll();

                // Apply parallax scrolling to hero elements
                const parallaxElements = document.querySelectorAll('.hero-bg-element');
                if (parallaxElements.length > 0) {
                    const scrolled = window.pageYOffset;
                    parallaxElements.forEach((el, index) => {
                        const speed = 0.5 + (index * 0.1);
                        const yPos = -(scrolled * speed);
                        el.style.transform = `translate3d(0, ${yPos}px, 0)`;
                    });
                }
            } catch (e) {
                console.error('Scroll handler error:', e.message);
            } finally {
                ticking = false;
            }
        });
        ticking = true;
    }
}, 16);

/* Contact Form Handler */


function initContactForm() {
    try {
        const contactForm = domCache.get('contactForm');
        if (!contactForm) {
            console.warn('Contact form not found');
            return;
        }

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            try {
                const formData = new FormData(this);
                const data = {
                    name: formData.get('name')?.trim(),
                    email: formData.get('email')?.trim(),
                    subject: formData.get('subject')?.trim(),
                    message: formData.get('message')?.trim()
                };

                // Client-side form validation
                if (!data.name || !data.email || !data.subject || !data.message) {
                    showFormMessage('Please fill in all fields.', 'error');
                    return;
                }

                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
                    showFormMessage('Please enter a valid email address.', 'error');
                    return;
                }

                const submitBtn = this.querySelector('.form-submit');
                if (submitBtn) {
                    handleFormSubmission(data, submitBtn, this);
                }
            } catch (err) {
                console.error('Form handling error:', err.message);
                showFormMessage('An error occurred. Please try again.', 'error');
            }
        });

        function handleFormSubmission(data, submitBtn, form) {
            const originalContent = submitBtn.innerHTML;
            
            // Display form submission loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                try {
                    // Clean data for secure mailto generation
                    const sanitized = Object.fromEntries(
                        Object.entries(data).map(([key, value]) => 
                            [key, value.replace(/[<>"'&]/g, '')]
                        )
                    );

                    const mailtoLink = `mailto:krushalhirpara.connect@gmail.com?subject=${encodeURIComponent(sanitized.subject)}&body=${encodeURIComponent(`Name: ${sanitized.name}\nEmail: ${sanitized.email}\n\nMessage:\n${sanitized.message}`)}`;
                    
                    window.location.href = mailtoLink;
                    form.reset();
                    showFormMessage('Thank you! Your message has been sent successfully.', 'success');
                } catch (err) {
                    console.error('Form submission error:', err.message);
                    showFormMessage('An error occurred. Please try again.', 'error');
                } finally {
                    submitBtn.innerHTML = originalContent;
                    submitBtn.disabled = false;
                }
            }, 1500);
        }

        function showFormMessage(message, type) {
            try {
                // Clear any previous form messages
                const existingMessage = document.querySelector('.form-message');
                existingMessage?.remove();

                const messageDiv = document.createElement('div');
                messageDiv.className = `form-message form-message-${type}`;
                messageDiv.textContent = message;

                const styles = type === 'success' 
                    ? 'background: rgba(34, 197, 94, 0.1); color: #15803d; border: 1px solid rgba(34, 197, 94, 0.3);'
                    : 'background: rgba(239, 68, 68, 0.1); color: #dc2626; border: 1px solid rgba(239, 68, 68, 0.3);';

                messageDiv.style.cssText = `
                    padding: 1rem;
                    margin: 1rem 0;
                    border-radius: 0.5rem;
                    font-weight: 500;
                    text-align: center;
                    ${styles}
                `;

                contactForm.insertBefore(messageDiv, contactForm.firstChild);

                // Auto-remove after 5 seconds
                setTimeout(() => messageDiv.remove(), 5000);
            } catch (e) {
                console.error('Form message display error:', e.message);
            }
        }
    } catch (e) {
        console.error('Contact form initialization failed:', e.message);
    }
}

/* Project Search & Filter System */


function initSearchAndFilter() {
    try {
        const searchInput = domCache.get('searchInput');
        const filterButtons = domCache.get('filterButtons');
        const projectCards = domCache.get('projectCards');
        
        let currentFilter = 'all';

        if (searchInput) {
            searchInput.addEventListener('input', debounce(handleSearch, 300));
        }

        if (filterButtons && filterButtons.length > 0) {
            document.addEventListener('click', (e) => {
                if (e.target.matches('.filter-btn')) {
                    try {
                        filterButtons.forEach(b => b.classList.remove('active'));
                        e.target.classList.add('active');
                        currentFilter = e.target.dataset.filter || 'all';
                        filterProjects();
                    } catch (filterError) {
                        console.error('Filter projects execution error:', filterError.message);
                    }
                }
            });
        }

        function handleSearch() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            filterProjects(searchTerm);
        }

        function filterProjects(searchTerm = '') {
            if (!projectCards || projectCards.length === 0) return;

            const visibleCards = [];

            projectCards.forEach(card => {
                try {
                    const cardData = {
                        categories: card.dataset.category || '',
                        keywords: card.dataset.keywords || '',
                        title: card.querySelector('.project-title')?.textContent.toLowerCase() || '',
                        description: card.querySelector('.project-description')?.textContent.toLowerCase() || ''
                    };

                    const matchesFilter = currentFilter === 'all' || cardData.categories.includes(currentFilter);
                    const matchesSearch = !searchTerm || Object.values(cardData).some(value => 
                        value.includes(searchTerm)
                    );

                    if (matchesFilter && matchesSearch) {
                        showCard(card);
                        visibleCards.push(card);
                    } else {
                        hideCard(card);
                    }
                } catch (err) {
                    console.warn('Project card filtering error:', err.message);
                }
            });

            updateNoResultsMessage(visibleCards.length === 0);
        }

        function showCard(card) {
            card.classList.remove('hidden', 'fade-out');
            card.classList.add('fade-in');
            card.style.display = 'block';
        }

        function hideCard(card) {
            card.classList.remove('fade-in');
            card.classList.add('fade-out');
            
            setTimeout(() => {
                if (card.classList.contains('fade-out')) {
                    card.style.display = 'none';
                    card.classList.add('hidden');
                }
            }, 300);
        }

        function updateNoResultsMessage(showMessage) {
            const projectsGrid = document.getElementById('projectsGrid');
            if (!projectsGrid) return;

            const existingMessage = document.querySelector('.no-results-message');
            existingMessage?.remove();

            if (showMessage) {
                const noResultsDiv = document.createElement('div');
                noResultsDiv.className = 'no-results-message';

                const contentDiv = document.createElement('div');
                Object.assign(contentDiv.style, {
                    textAlign: 'center',
                    padding: '3rem',
                    color: 'var(--text-secondary)'
                });

                const icon = document.createElement('i');
                icon.className = 'fas fa-search';
                Object.assign(icon.style, {
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    opacity: '0.5'
                });

                const heading = document.createElement('h3');
                heading.textContent = 'No projects found';
                heading.style.marginBottom = '0.5rem';

                const paragraph = document.createElement('p');
                paragraph.textContent = 'Try adjusting your search terms or filters';

                contentDiv.append(icon, heading, paragraph);
                noResultsDiv.appendChild(contentDiv);
                projectsGrid.appendChild(noResultsDiv);
            }
        }

        // Expose search function for keyboard access
        window.handleSearch = handleSearch;
    } catch (e) {
        console.error('Search and filter initialization failed:', e.message);
    }
}

/* Smooth Scrolling Navigation */


function initSmoothScrolling() {
    try {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                } else {
                    // Handle missing anchor targets gracefully
                    window.location.hash = this.getAttribute('href');
                }
            });
        });
    } catch (e) {
        console.error('Smooth scrolling initialization failed:', e.message);
    }
}

/* Keyboard Shortcuts Handler */


function initKeyboardShortcuts() {
    document.addEventListener('keydown', function (e) {
        try {
            const searchInput = domCache.get('searchInput');

            // Focus search input with Ctrl/Cmd + K
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                searchInput?.focus();
            }

            // Clear search input with Escape key
            if (e.key === 'Escape' && searchInput && document.activeElement === searchInput) {
                searchInput.value = '';
                window.handleSearch?.();
                searchInput.blur();
            }
        } catch (e) {
            console.warn('Keyboard shortcut error:', e.message);
        }
    });
}

/* Main Portfolio Initialization */


function initPortfolio() {
    try {
        console.log('🚀 Initializing Portfolio...');

        cacheElements();

        // Initialize all portfolio components sequentially
        const initFunctions = [
            initThemeToggle,
            initMobileMenu,
            initHoverEffects,
            initSmoothScrolling,
            initIntersectionObserver,
            initTypingAnimation,
            initButtonEffects,
            initContactForm,
            initSearchAndFilter,
            initKeyboardShortcuts
        ];

        initFunctions.forEach(fn => {
            try {
                fn();
            } catch (e) {
                console.warn(`Failed to initialize ${fn.name}:`, e.message);
            }
        });

        console.log('✅ Portfolio initialized successfully');
    } catch (e) {
        console.error('❌ Portfolio initialization failed:', e.message);
        
        // Essential fallback initialization
        try {
            cacheElements();
            initThemeToggle();
            initMobileMenu();
        } catch (fallbackError) {
            console.error('❌ Fallback initialization failed:', fallbackError.message);
        }
    }
}

/* Application Startup */


// Start loading animation before DOM ready
initLoadingAnimation();

// Display portfolio branding in console
console.log(`
🚀 Krushal Hirpara's Portfolio
💻 Built with HTML, CSS & JavaScript
🔒 Cybersecurity Enthusiast & Developer
📧 krushalhirpara.connect@gmail.com
🔗 github.com/KRUSHAL2956
`);

// Initialize when DOM content is loaded
document.addEventListener('DOMContentLoaded', initPortfolio);
window.addEventListener('scroll', handleScroll, { passive: true });

// Handle case where DOM is already loaded
if (document.readyState !== 'loading') {
    initPortfolio();
}