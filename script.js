// Theme Management
class ThemeManager {
    constructor() {
        // Always default to light theme, but check for stored preference
        this.theme = this.getStoredTheme() || 'light'; // Changed from getSystemTheme() to 'light'
        this.init();
    }

    init() {
        this.applyTheme(this.theme);
        // Removed setupThemeToggle() call
        // Removed watchSystemTheme() call to prevent automatic dark mode switching
        this.updateThemeImages(this.theme);
    }

    getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    getStoredTheme() {
        return localStorage.getItem('noeji-theme');
    }

    storeTheme(theme) {
        localStorage.setItem('noeji-theme', theme);
    }

    applyTheme(theme) {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        this.updateThemeIcon(theme);
        this.updateThemeImages(theme);
        this.theme = theme;
    }

    updateThemeIcon(theme) {
        // Keep the function for future use, but no buttons exist now
        const icons = document.querySelectorAll('#theme-icon, #theme-toggle-mobile svg');
        const sunIcon = `<path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>`;
        const moonIcon = `<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>`;
        
        icons.forEach(icon => {
            icon.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
        });
    }

    updateThemeImages(theme) {
        const themeImages = document.querySelectorAll('.theme-switchable-image');
        themeImages.forEach(img => {
            const lightSrc = img.src.replace(/_dark\.(png|jpg|jpeg|gif|webp)/, '.$1');
            const darkSrc = img.getAttribute('data-dark-src');
            
            if (theme === 'dark' && darkSrc) {
                img.src = darkSrc;
            } else {
                // For light theme, use the original src (without _dark suffix)
                const originalSrc = lightSrc || img.getAttribute('src').replace(/_dark\.(png|jpg|jpeg|gif|webp)/, '.$1');
                img.src = originalSrc;
            }
        });
    }

    // Keep toggleTheme method for future use
    toggleTheme() {
        const newTheme = this.theme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
        this.storeTheme(newTheme);
    }

    // Keep setupThemeToggle method for future use (currently no buttons exist)
    setupThemeToggle() {
        const toggleButtons = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');
        toggleButtons.forEach(button => {
            button.addEventListener('click', () => this.toggleTheme());
        });
    }

    // Keep watchSystemTheme method for future use
    watchSystemTheme() {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!this.getStoredTheme()) {
                this.applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
}

// Navigation Management
class NavigationManager {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        this.mobileMenuClose = document.getElementById('mobile-menu-close');
        this.init();
    }

    init() {
        this.setupScrollEffect();
        this.setupMobileMenu();
        this.setupSmoothScrolling();
    }

    setupScrollEffect() {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Add scrolled class for background change
            if (currentScrollY > 50) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
            
            lastScrollY = currentScrollY;
        });
    }

    setupMobileMenu() {
        this.mobileMenuToggle.addEventListener('click', () => {
            this.mobileMenu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden';
        });

        this.mobileMenuClose.addEventListener('click', () => {
            this.closeMobileMenu();
        });

        // Close menu when clicking on links
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });

        // Close menu when clicking outside
        this.mobileMenu.addEventListener('click', (e) => {
            if (e.target === this.mobileMenu) {
                this.closeMobileMenu();
            }
        });
    }

    closeMobileMenu() {
        this.mobileMenu.classList.add('translate-x-full');
        document.body.style.overflow = '';
    }

    setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Animation Manager
class AnimationManager {
    constructor() {
        this.observedElements = new Set();
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.observeElements();
    }

    setupIntersectionObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    this.observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
    }

    observeElements() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            this.observer.observe(element);
            this.observedElements.add(element);
        });
    }

    // Method to add new elements for observation (useful for dynamic content)
    observeElement(element) {
        if (!this.observedElements.has(element)) {
            this.observer.observe(element);
            this.observedElements.add(element);
        }
    }
}

// FAQ Manager
class FAQManager {
    constructor() {
        this.faqItems = document.querySelectorAll('.faq-item');
        this.init();
    }

    init() {
        this.setupFAQToggle();
    }

    setupFAQToggle() {
        this.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-icon');

            question.addEventListener('click', () => {
                this.toggleFAQ(item, answer, icon);
            });
        });
    }

    toggleFAQ(item, answer, icon) {
        const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';
        
        if (isOpen) {
            // Close the FAQ
            answer.style.maxHeight = '0px';
            icon.style.transform = 'rotate(0deg)';
            item.classList.remove('faq-open');
        } else {
            // Open the FAQ
            answer.style.maxHeight = answer.scrollHeight + 'px';
            icon.style.transform = 'rotate(45deg)';
            item.classList.add('faq-open');
        }
    }
}

// Form Manager
class FormManager {
    constructor() {
        this.forms = document.querySelectorAll('#waitlist-form, #final-waitlist-form');
        this.init();
    }

    init() {
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const emailInput = form.querySelector('input[type="email"]');
        const submitButton = form.querySelector('button[type="submit"]');
        
        // Basic validation
        if (!this.validateEmail(emailInput.value)) {
            this.showMessage(form, 'Please enter a valid email address.', 'error');
            return;
        }

        // Show loading state
        this.setLoadingState(submitButton, true);

        try {
            // Simulate API call (replace with actual implementation)
            await this.submitToWaitlist(emailInput.value);
            
            // Success
            this.showMessage(form, 'Thanks for joining! We\'ll email you when Noeji launches.', 'success');
            emailInput.value = '';
            
            // Track conversion (placeholder for analytics)
            this.trackConversion(emailInput.value);
            
        } catch (error) {
            console.error('Waitlist submission error:', error);
            this.showMessage(form, 'Something went wrong. Please try again.', 'error');
        } finally {
            this.setLoadingState(submitButton, false);
        }
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    async submitToWaitlist(email) {
        // Placeholder for actual API implementation
        // This would typically send to your backend/Firebase/Mailchimp etc.
        console.log('Submitting email to waitlist:', email);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // For now, just store in localStorage for demo purposes
        const waitlistEmails = JSON.parse(localStorage.getItem('noeji-waitlist') || '[]');
        if (!waitlistEmails.includes(email)) {
            waitlistEmails.push(email);
            localStorage.setItem('noeji-waitlist', JSON.stringify(waitlistEmails));
        }
        
        return { success: true };
    }

    showMessage(form, message, type) {
        // Remove existing messages
        const existingMessage = form.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create new message
        const messageElement = document.createElement('div');
        messageElement.className = `form-message ${type}`;
        messageElement.textContent = message;
        
        form.appendChild(messageElement);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (messageElement.parentNode) {
                messageElement.remove();
            }
        }, 5000);
    }

    setLoadingState(button, isLoading) {
        if (isLoading) {
            button.classList.add('loading');
            button.disabled = true;
            button.textContent = 'Joining...';
        } else {
            button.classList.remove('loading');
            button.disabled = false;
            button.textContent = button.id === 'final-waitlist-form' ? 
                'Join Waitlist & Get Free Pro' : 'Notify Me & Claim Free Pro';
        }
    }

    trackConversion(email) {
        // Placeholder for analytics tracking
        console.log('Conversion tracked for:', email);
        
        // Example: Google Analytics event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'waitlist_signup', {
                'event_category': 'engagement',
                'event_label': 'hero_form'
            });
        }
    }
}

// Carousel Manager
class CarouselManager {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.carousel-slide');
        this.dots = document.querySelectorAll('.dot');
        this.autoPlayInterval = null;
        this.init();
    }

    init() {
        if (this.slides.length === 0) return;
        
        this.setupAutoPlay();
        this.setupDotNavigation();
        this.setupKeyboardNavigation();
        this.setupTouchNavigation();
    }

    showSlide(index, direction = 'next') {
        // Don't animate if it's the same slide
        if (index === this.currentSlide) return;

        const currentSlide = this.slides[this.currentSlide];
        const nextSlide = this.slides[index];

        // Determine animation classes based on direction
        let exitClass, enterClass;
        if (direction === 'next') {
            // Forward: current exits left, new enters from right
            exitClass = 'exiting-left';
            enterClass = 'entering-from-right';
        } else {
            // Backward: current exits right, new enters from left
            exitClass = 'exiting-right';
            enterClass = 'entering-from-left';
        }

        // Clean up all animation classes from next slide first
        nextSlide.classList.remove('active', 'exiting-left', 'exiting-right', 'entering-from-left', 'entering-from-right');
        
        // Set the initial position of the next slide (without transition)
        nextSlide.style.transition = 'none';
        if (direction === 'next') {
            nextSlide.style.transform = 'translateX(100%)';
            nextSlide.style.opacity = '0';
        } else {
            nextSlide.style.transform = 'translateX(-100%)';
            nextSlide.style.opacity = '0';
        }

        // Force a reflow to ensure the position is set
        nextSlide.offsetHeight;

        // Re-enable transitions
        nextSlide.style.transition = '';

        // Start exit animation for current slide
        if (currentSlide) {
            currentSlide.classList.remove('active');
            currentSlide.classList.add(exitClass);
        }

        // Start entrance animation for next slide
        setTimeout(() => {
            nextSlide.classList.add('active');
            nextSlide.style.transform = '';
            nextSlide.style.opacity = '';
        }, 50);

        // Clean up exiting slide after animation completes
        setTimeout(() => {
            if (currentSlide) {
                currentSlide.classList.remove(exitClass);
            }
        }, 650);

        // Update dots
        this.dots.forEach(dot => dot.classList.remove('active'));
        this.dots[index].classList.add('active');

        this.currentSlide = index;
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(nextIndex, 'next');
    }

    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prevIndex, 'prev');
    }

    setupAutoPlay() {
        this.startAutoPlay();
        
        // Pause on hover
        const carousel = document.querySelector('.showcase-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
            carousel.addEventListener('mouseleave', () => this.startAutoPlay());
        }
    }

    startAutoPlay() {
        this.stopAutoPlay(); // Clear any existing interval
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 4000);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    setupDotNavigation() {
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                // Determine direction based on slide position
                const direction = index > this.currentSlide ? 'next' : 'prev';
                this.showSlide(index, direction);
                this.stopAutoPlay();
                // Restart autoplay after user interaction
                setTimeout(() => this.startAutoPlay(), 2000);
            });
        });
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });
    }

    setupTouchNavigation() {
        const carousel = document.querySelector('.carousel-container');
        if (!carousel) return;

        let startX = 0;
        let endX = 0;

        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe();
        });
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const diff = this.startX - this.endX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }
    }
}

// Utility Functions
function scrollToWaitlist() {
    const heroSection = document.getElementById('hero');
    const finalCTA = document.getElementById('final-cta');
    
    // Scroll to hero if we're not already there, otherwise scroll to final CTA
    const currentScroll = window.scrollY;
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    
    if (currentScroll < heroBottom) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        finalCTA.scrollIntoView({ behavior: 'smooth' });
    }
}

// Global function for carousel (called from HTML)
function showSlide(index) {
    if (window.carouselManager) {
        // Determine direction based on slide position
        const currentIndex = window.carouselManager.currentSlide;
        const direction = index > currentIndex ? 'next' : 'prev';
        window.carouselManager.showSlide(index, direction);
    }
}

// Performance Optimization
class PerformanceManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupLazyLoading();
        this.setupPreloadCriticalResources();
        this.optimizeAnimations();
    }

    setupLazyLoading() {
        // Lazy load images when they come into view
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    setupPreloadCriticalResources() {
        // Preload critical fonts
        const fontUrls = [
            'https://fonts.googleapis.com/css2?family=Pacifico&display=swap',
            'https://fonts.googleapis.com/css2?family=Afacad:wght@400;500;600;700&display=swap',
            'https://fonts.googleapis.com/css2?family=Signika:wght@400;500;600;700&display=swap'
        ];

        fontUrls.forEach(url => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = url;
            document.head.appendChild(link);
        });
    }

    optimizeAnimations() {
        // Reduce animations for users who prefer reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        }
    }
}

// Error Handling
class ErrorManager {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('error', (e) => {
            console.error('Global error:', e.error);
            this.logError(e.error);
        });

        window.addEventListener('unhandledrejection', (e) => {
            console.error('Unhandled promise rejection:', e.reason);
            this.logError(e.reason);
        });
    }

    logError(error) {
        // In production, you would send this to your error tracking service
        // e.g., Sentry, LogRocket, etc.
        console.log('Error logged:', error);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all managers
    window.themeManager = new ThemeManager();
    window.navigationManager = new NavigationManager();
    window.animationManager = new AnimationManager();
    window.faqManager = new FAQManager();
    window.formManager = new FormManager();
    window.carouselManager = new CarouselManager();
    window.performanceManager = new PerformanceManager();
    window.errorManager = new ErrorManager();

    // Add some interactive enhancements
    setupInteractiveEnhancements();
});

function setupInteractiveEnhancements() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.use-case-card, .pricing-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Add click effect to record button
    const recordButton = document.querySelector('.record-button');
    if (recordButton) {
        recordButton.addEventListener('click', () => {
            recordButton.style.transform = 'scale(0.95)';
            setTimeout(() => {
                recordButton.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // Add parallax effect to hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-bg');
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add typing effect to hero text (optional enhancement)
    const heroTitle = document.querySelector('#hero h1');
    if (heroTitle && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // This could be enhanced with a typing animation library
        heroTitle.style.opacity = '0';
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transition = 'opacity 1s ease-in-out';
        }, 500);
    }
}

// Analytics Integration (placeholder)
function initAnalytics() {
    // Google Analytics 4 example
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: 'Noeji Landing Page',
            page_location: window.location.href
        });
    }

    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            if (maxScroll % 25 === 0 && typeof gtag !== 'undefined') {
                gtag('event', 'scroll_depth', {
                    'event_category': 'engagement',
                    'value': maxScroll
                });
            }
        }
    });
}

// Call analytics initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnalytics);
} else {
    initAnalytics();
} 