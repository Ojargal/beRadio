/**
 * Component Loader
 * Loads external HTML components dynamically
 */

async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath + '?v=' + Date.now(), { cache: 'no-store' });
        if (!response.ok) {
            throw new Error(`Failed to load ${componentPath}: ${response.statusText}`);
        }
        const html = await response.text();
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = html;
        } else {
            console.error(`Element with id "${elementId}" not found`);
        }
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
    }
}

// Load all components when DOM is ready
document.addEventListener('DOMContentLoaded', async function() {
    // Load components in parallel for better performance
    await Promise.all([
        loadComponent('navigation', 'components/navigation.html'),
        loadComponent('hero', 'components/hero.html'),
        loadComponent('industries', 'components/industries.html'),
        loadComponent('features', 'components/features.html'),
        loadComponent('pricing', 'components/pricing.html'),
        loadComponent('program', 'components/program.html'),
        loadComponent('user-management-section', 'components/user-management.html'),
        loadComponent('contact', 'components/contact.html'),
        loadComponent('clients', 'components/clients.html'),
        loadComponent('info-section', 'components/info-section.html'),
        loadComponent('benefits', 'components/benefits.html'),
        loadComponent('footer', 'components/footer.html'),
        loadComponent('modals', 'components/modals.html')
    ]);

    // Initialize Mobile Menu after navigation is loaded
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        console.log('Menu button found, adding event listener');
        mobileMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Menu button clicked');
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close menu when clicking on links
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    } else {
        console.log('Menu button or menu not found');
    }

    // Initialize client logos
    initClientLogos();

    // Update copyright year
    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }

    // Initialize SVG Line AFTER Hero Section is loaded
    initSVGLine();

    // Initialize animations after all components are loaded
    // Use longer delay to ensure DOM is fully ready
    setTimeout(() => {
        try {
            if (typeof initAnimations === 'function') {
                console.log('Initializing animations...');
                initAnimations();
                // Refresh ScrollTrigger after dynamic components are loaded
                if (typeof ScrollTrigger !== 'undefined') {
                    setTimeout(() => ScrollTrigger.refresh(), 200);
                }
            } else {
                console.warn('initAnimations function not found');
                // Fallback: Make page visible immediately
                document.body.classList.add('loaded');
            }
        } catch (error) {
            console.error('Error initializing animations:', error);
            // Fallback: Make page visible even if animations fail
            document.body.classList.add('loaded');
        }
    }, 300);
});

// Initialize SVG Line Path (after hero is loaded)
function initSVGLine() {
    const lineContainer = document.querySelector('.line-container');
    const pathElement = document.getElementById('theLine');
    
    if (!lineContainer || !pathElement) return;
    
    const width = window.innerWidth;
    const contentHeight = 5000;
    const featuresTop = 1200;
    const endY = contentHeight;

    const pathData = `
        M ${width/2} 0
        C ${width/2} 400, ${width*0.1} 800, ${width*0.1} ${featuresTop}
        C ${width*0.1} ${featuresTop + 600}, ${width*0.9} ${featuresTop + 1000}, ${width*0.9} ${featuresTop + 1600}
        C ${width*0.9} ${featuresTop + 2200}, ${width/2} ${featuresTop + 2600}, ${width/2} ${featuresTop + 3000}
        C ${width/2} ${endY-800}, ${width*0.2} ${endY-400}, ${width/2} ${endY-200}
        C ${width*0.8} ${endY-100}, ${width/2} ${endY}, ${width/2} ${endY}
    `;
    
    pathElement.setAttribute('d', pathData);
    // DO NOT set stroke-opacity here - let GSAP handle it in animations
    
    // Calculate length and set dashoffset to hide line initially
    const length = pathElement.getTotalLength();
    if (length) {
        pathElement.style.strokeDasharray = length;
        pathElement.style.strokeDashoffset = length;
    }
    
    lineContainer.style.height = `${contentHeight}px`;
    lineContainer.style.visibility = 'visible';
}

// Function to load client logos dynamically
function initClientLogos() {
    const logoFolder = 'assets/firmen_logos_fremd/';
    const logos = [
        'auhofcenter.png',
        'hotel am konzerthaus vienna.png',
        'magdas hotel.png',
        'nameit!.png',
        'riverside.png',
        'limonis.png'
    ];
    
    const marqueeContent = document.getElementById('marquee-content');
    
    if (marqueeContent) {
        // Create logos twice for seamless loop
        const createLogos = () => {
            return logos.map(logo => {
                const div = document.createElement('div');
                div.className = 'marquee-item';
                const img = document.createElement('img');
                img.src = logoFolder + logo;
                img.alt = logo.replace('.png', '');
                img.className = 'client-logo';
                img.onerror = function() {
                    console.error('Failed to load logo:', logo);
                };
                img.onload = function() {
                    console.log('Logo loaded:', logo);
                };
                div.appendChild(img);
                return div;
            });
        };
        
        // Add logos twice for seamless infinite scroll
        const firstSet = createLogos();
        const secondSet = createLogos();
        
        firstSet.forEach(logo => marqueeContent.appendChild(logo));
        secondSet.forEach(logo => marqueeContent.appendChild(logo));
        
        console.log('Client logos initialized');
    } else {
        console.error('Marquee content element not found');
    }
}
