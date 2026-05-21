/**
 * Scroll to Top Button - Zentrale Implementierung
 * Initialisiert den "Nach oben scrollen" Button
 */

function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (scrollToTopBtn) {
        // Zeige/Verstecke Button beim Scrollen
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        }, { passive: true });
        
        // Click Event - Scrolle nach oben
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Auto-Initialisierung nach DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollToTop);
} else {
    // DOM bereits geladen
    initScrollToTop();
}

// Export für Module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initScrollToTop };
}
