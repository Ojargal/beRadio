/*
 * BERADIO Landing Page - GSAP Animations
 * Alle Scroll- und Entrance-Animationen (OOP Structure)
 */

// GSAP ScrollTrigger Plugin registrieren
gsap.registerPlugin(ScrollTrigger);

class PageAnimations {
    constructor() {
        this.body = document.body;
        this.nav = document.querySelector('nav');

        this.featureBlocks = gsap.utils.toArray('.feature-block');
        this.pricingContainer = document.querySelector('#preise');
        this.pricingCards = gsap.utils.toArray('.pricing-card-wrapper');
        this.benefitsBg = document.querySelector('.benefits-bg');
        this.benefitsSection = document.getElementById('benefits-section');
        this.benefitItems = document.querySelectorAll('.benefit-item');
        this.contactSection = document.querySelector('#contact');
        this.programSection = document.querySelector('#program');
        this.programHeaderText = document.querySelector('.program-header-text');
        this.programTimeCol = document.querySelector('.program-time-col');
        this.programCalendars = document.querySelectorAll('.program-calendar');
        this.programTextBoxes = document.querySelectorAll('.program-text-box');
        this.programTracks = document.querySelectorAll('.program-track');
        this.programBlocks = document.querySelectorAll('.program-block');
        this.programBadges = document.querySelectorAll('.program-badge');
        this.infoSection = document.querySelector('#info-section');
        this.infoTitle = document.querySelector('#info-section h3');
        this.infoTypewriter = document.querySelector('#info-section #typewriter-text');

        this.isMobile = window.innerWidth < 768;
        this.lastBodyHeight = 0;
        this.heightIsSet = false; // Flag für einmalige Höheneinstellung
    }

    // 1. NAVBAR SLIDE DOWN
    initNavbarAnimation() {
        gsap.fromTo(this.nav,
            { y: -150, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.2 }
        );
    }

    // 2. HERO SECTION ANIMATIONS
    initHeroAnimations() {
        // Left Background Layer
        if (document.querySelector(".left-bg-layer")) {
            gsap.fromTo(".left-bg-layer",
                { width: "0%" },
                { width: "60%", duration: 1.5, ease: "power3.out", delay: 0.2 }
            );
        }

        // Right Background Layer
        if (document.querySelector(".right-bg-layer")) {
            gsap.fromTo(".right-bg-layer",
                { width: "0%" },
                { width: "50%", duration: 1.5, ease: "power3.out", delay: 0.2 }
            );
        }

        // Hero Content Timeline
        const heroTimeline = gsap.timeline({ delay: 0.5 });
        
        const animateIfExists = (selector, varsFrom, varsTo, position) => {
            if (document.querySelector(selector)) {
                heroTimeline.fromTo(selector, varsFrom, varsTo, position);
            }
        };

        animateIfExists(".hero-badge", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" });
        animateIfExists(".hero-brand", { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, "-=0.2");
        animateIfExists(".hero-sound", { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, "-=0.4");
        animateIfExists(".hero-track", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.7, ease: "bounce.out" }, "-=0.3");
        animateIfExists(".hero-desc", { opacity: 0, filter: "blur(10px)" }, { opacity: 1, filter: "blur(0px)", duration: 1, ease: "power2.out" }, "-=0.5");
        animateIfExists(".hero-button", { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" }, "-=0.6");
        animateIfExists(".hero-grid", { opacity: 0, x: 300 }, { opacity: 1, x: 0, duration: 1.5, ease: "power3.out" }, "-=0.8");
    }

    // 3b. FEATURE 1 BACKGROUND ANIMATIONS
    initWarumHeadingAnimation() {
        const feature1Text = document.querySelector('#feature1-text');
        if (feature1Text) {
            gsap.fromTo(feature1Text,
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 0.9, ease: "power2.out", delay: 0.3,
                    scrollTrigger: { trigger: feature1Text, start: "top 95%", toggleActions: "play none none reverse" }
                }
            );

            // Feature1 yellow bg: left→right
            const f1Yellow = document.getElementById('f1-yellow-bg');
            if (f1Yellow) {
                const f1YellowRect = f1Yellow.getBoundingClientRect();
                const alreadyVisible = f1YellowRect.top < window.innerHeight;
                if (alreadyVisible) {
                    gsap.fromTo(f1Yellow,
                        { clipPath: 'inset(0 100% 0 0)' },
                        { clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: "power3.out", delay: 0.2 }
                    );
                } else {
                    gsap.fromTo(f1Yellow,
                        { clipPath: 'inset(0 100% 0 0)' },
                        {
                            clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: "power3.out",
                            scrollTrigger: { trigger: f1Yellow, start: "top bottom", toggleActions: "play none none reverse" }
                        }
                    );
                }
            }

            // Feature1 blue bg: right→left
            const f1Blue = document.getElementById('f1-blue-bg');
            if (f1Blue) {
                const f1BlueRect = f1Blue.getBoundingClientRect();
                const alreadyVisible = f1BlueRect.top < window.innerHeight;
                if (alreadyVisible) {
                    gsap.fromTo(f1Blue,
                        { clipPath: 'inset(0 0 0 100%)' },
                        { clipPath: 'inset(0 0 0 0%)', duration: 1.2, ease: "power3.out", delay: 0.2 }
                    );
                } else {
                    gsap.fromTo(f1Blue,
                        { clipPath: 'inset(0 0 0 100%)' },
                        {
                            clipPath: 'inset(0 0 0 0%)', duration: 1.2, ease: "power3.out",
                            scrollTrigger: { trigger: f1Blue, start: "top bottom", toggleActions: "play none none reverse" }
                        }
                    );
                }
            }
        }

        // Feature 2 backgrounds
        const feature2Block = document.querySelector('.feature-block:nth-child(2)') || document.getElementById('f2-yellow-bg')?.closest('.feature-block');
        const f2Trigger = document.getElementById('f2-yellow-bg');
        const f2Yellow = document.getElementById('f2-yellow-bg');
        if (f2Yellow) {
            gsap.fromTo(f2Yellow,
                { clipPath: 'inset(0 100% 0 0)' },
                {
                    clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: "power3.out",
                    scrollTrigger: { trigger: f2Yellow, start: "top 85%", toggleActions: "play none none reverse" }
                }
            );
        }
        const f2Blue = document.getElementById('f2-blue-bg');
        if (f2Blue) {
            gsap.fromTo(f2Blue,
                { clipPath: 'inset(0 0 0 100%)' },
                {
                    clipPath: 'inset(0 0 0 0%)', duration: 1.2, ease: "power3.out",
                    scrollTrigger: { trigger: f2Blue, start: "top 85%", toggleActions: "play none none reverse" }
                }
            );
        }

        const f3Left = document.getElementById('f3-left-bg');
        if (f3Left) {
            gsap.fromTo(f3Left,
                { clipPath: 'inset(0 100% 0 0)' },
                {
                    clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: "power3.out",
                    scrollTrigger: { trigger: f3Left, start: "top 85%", toggleActions: "play none none reverse" }
                }
            );
        }
        const f3Right = document.getElementById('f3-right-bg');
        if (f3Right) {
            gsap.fromTo(f3Right,
                { clipPath: 'inset(0 0 0 100%)' },
                {
                    clipPath: 'inset(0 0 0 0%)', duration: 1.2, ease: "power3.out",
                    scrollTrigger: { trigger: f3Right, start: "top 85%", toggleActions: "play none none reverse" }
                }
            );
        }
    }

    // 4. FEATURES SECTION ANIMATIONS
    initFeaturesAnimations() {
        this.featureBlocks.forEach((block, index) => {
            // Erster Block: Keine Fade-in Animation, da bereits sichtbar
            if (index > 0) {
                gsap.fromTo(block,
                    { opacity: 0, y: 100 },
                    {
                        opacity: 1, y: 0, duration: 1, ease: "power3.out",
                        scrollTrigger: { trigger: block, start: "top 80%", toggleActions: "play none none reverse" }
                    }
                );
            }

            const videoContainer = block.querySelector('.absolute video');
            if (videoContainer) {
                gsap.fromTo(videoContainer.parentElement,
                    { scale: 0.7, opacity: 0 },
                    {
                        scale: 1, opacity: 1, duration: 1.5, ease: "power3.out",
                        scrollTrigger: { trigger: block, start: "top 75%", toggleActions: "play none none reverse" }
                    }
                );
                gsap.to(videoContainer.parentElement, {
                    y: -50, ease: "none",
                    scrollTrigger: { trigger: block, start: "top bottom", end: "bottom top", scrub: 1 }
                });
            }

            // Click Handler for First Video (Expand & Sharpen)
            if (index === 0) {
                const videoWrapper = block.querySelector('video')?.parentElement;
                if (videoWrapper) {
                    videoWrapper.addEventListener('click', (e) => {
                        e.stopPropagation();
                        videoWrapper.classList.toggle('video-fullscreen');
                        videoWrapper.style.cursor = videoWrapper.classList.contains('video-fullscreen') ? 'zoom-out' : 'zoom-in';
                    });
                }
            }

            const image = block.querySelector('img');
            if (image) {
                gsap.fromTo(image,
                    { scale: 0.8, rotation: index % 2 === 0 ? -20 : 20, opacity: 0 },
                    {
                        scale: 1, rotation: 0, opacity: 1, duration: 1.2, ease: "back.out(1.5)",
                        scrollTrigger: { trigger: block, start: "top 75%", toggleActions: "play none none reverse" }
                    }
                );

                if (block.querySelector('video') && window.innerWidth < 1024) {
                    gsap.to(image.closest('.relative.z-10'), { opacity: 0, duration: 1, delay: 2, ease: "power2.inOut" });
                }

                image.addEventListener('mouseenter', () => gsap.to(image, { scale: 1.05, rotation: 5, duration: 0.3, ease: "power2.out" }));
                image.addEventListener('mouseleave', () => gsap.to(image, { scale: 1, rotation: 0, duration: 0.3, ease: "power2.out" }));

            // Feature Label Box: unten nach oben beim Scrollen
            const labelBox = block.querySelector('.feature-label-box');
            if (labelBox) {
                gsap.fromTo(labelBox,
                    { opacity: 0, y: 80 },
                    {
                        opacity: 1, y: 0, duration: 1, ease: "power3.out",
                        scrollTrigger: { trigger: block, start: "top 75%", toggleActions: "play none none reverse" }
                    }
                );
            }

                gsap.to(image, {
                    y: -50, ease: "none",
                    scrollTrigger: { trigger: block, start: "top bottom", end: "bottom top", scrub: 1 }
                });
            }
        });
    }

    // 5. PRICING SECTION ANIMATIONS
    initPricingAnimations() {
        if (!this.pricingCards.length) return;

        // Einfache Animation: Jede Karte dreht sich beim Scrollen um
        this.pricingCards.forEach((card, index) => {
            // Fade in Animation
            gsap.fromTo(card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });

        // Flip Animation - Sequenziell (nacheinander)
        const innerCards = this.pricingCards.map(card => card.querySelector('.card-inner')).filter(el => el);
        
        if (innerCards.length > 0) {
            gsap.to(innerCards, {
                rotationY: 180,
                duration: 0.6,
                stagger: 0.2, // Karten drehen sich nacheinander um
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: this.pricingContainer,
                    start: "top 60%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });
        }
    }

    // 6. NAVBAR BACKGROUND ON SCROLL
    initNavbarScroll() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.nav.classList.add('bg-white/95', 'shadow-sm');
                this.nav.classList.remove('bg-white/0');
            } else {
                this.nav.classList.remove('bg-white/95', 'shadow-sm');
                this.nav.classList.add('bg-white/0');
            }
        });
    }

    // 7. BENEFITS SECTION ANIMATIONS
    initBenefitsAnimations() {
        if (this.benefitsBg && this.benefitsSection) {
            gsap.fromTo(this.benefitsBg,
                { scale: 1.2 },
                { scale: 1, ease: "none", scrollTrigger: { trigger: this.benefitsSection, start: "top bottom", end: "bottom top", scrub: 1 } }
            );
        }

        if (this.benefitItems.length > 0) {
            this.benefitItems.forEach((item, index) => {
                const icon = item.querySelector('.benefit-icon');
                const text = item.querySelector('.benefit-text');

                gsap.fromTo(item,
                    { opacity: 0, y: 50, scale: 0.8 },
                    {
                        opacity: 1, y: 0, scale: 1, duration: 0.6, delay: index * 0.1, ease: "back.out(1.7)",
                        scrollTrigger: { trigger: item, start: "top 85%", toggleActions: "play none none none" }
                    }
                );

                if (icon) {
                    const stConfig = { trigger: item, start: "top 85%", toggleActions: "play none none none" };
                    gsap.to(icon, { textShadow: "0 0 20px rgba(255, 45, 87, 0.8), 0 0 40px rgba(255, 45, 87, 0.6)", duration: 0.8, delay: index * 0.1 + 0.3, ease: "power2.out", scrollTrigger: stConfig });
                }

                if (text) {
                    gsap.to(text, { textShadow: "0 0 10px rgba(255, 45, 87, 0.3)", duration: 0.8, delay: index * 0.1 + 0.4, ease: "power2.out", scrollTrigger: { trigger: item, start: "top 85%", toggleActions: "play none none none" } });
                }
            });
        }

        // CTA Text: slide up + fade in
        const ctaText = document.getElementById('benefits-cta-text');
        if (ctaText) {
            gsap.fromTo(ctaText,
                { opacity: 0, y: 60 },
                {
                    opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
                    scrollTrigger: { trigger: ctaText, start: "top 85%", toggleActions: "play none none none" }
                }
            );
        }

        // CTA Button: scale bounce in after text
        const ctaBtn = document.getElementById('benefits-cta-btn');
        if (ctaBtn) {
            gsap.fromTo(ctaBtn,
                { opacity: 0, scale: 0.7, y: 30 },
                {
                    opacity: 1, scale: 1, y: 0, duration: 0.7, delay: 0.3, ease: "back.out(1.7)",
                    scrollTrigger: { trigger: ctaBtn, start: "top 90%", toggleActions: "play none none none" }
                }
            );
        }
    }

    // 8. INFO SECTION ANIMATIONS
    initInfoSectionAnimations() {
        if (!this.infoSection) return;

        // Animate the "be radio" title
        if (this.infoTitle) {
            gsap.fromTo(this.infoTitle,
                { opacity: 0, x: -100 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: this.infoSection,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }

        // Animate the typewriter container
        if (this.infoTypewriter) {
            gsap.fromTo(this.infoTypewriter.parentElement,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.3,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: this.infoSection,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }
    }

    // 9. CONTACT SECTION ANIMATIONS
    initContactAnimations() {
        if (this.contactSection) {
            const stConfig = { trigger: this.contactSection, start: "top 80%", toggleActions: "play none none reverse" };
            gsap.fromTo('#contact .inline-block', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)", scrollTrigger: stConfig });
            gsap.fromTo('#contact h2', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.1, ease: "power3.out", scrollTrigger: stConfig });
            gsap.fromTo('#contact h2 + p', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.2, ease: "power3.out", scrollTrigger: stConfig });

            this.contactSection.querySelectorAll('.contact-info-cards > div').forEach((card, index) => {
                gsap.fromTo(card,
                    { opacity: 0, x: -50, scale: 0.9 },
                    { opacity: 1, x: 0, scale: 1, duration: 0.5, delay: 0.3 + (index * 0.1), ease: "power3.out", scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" } }
                );
            });

            const formCard = this.contactSection.querySelector('.contact-form-card');
            if (formCard) {
                gsap.fromTo(formCard,
                    { opacity: 0, x: 50, scale: 0.95 },
                    { opacity: 1, x: 0, scale: 1, duration: 0.6, delay: 0.4, ease: "power3.out", scrollTrigger: { trigger: formCard, start: "top 85%", toggleActions: "play none none reverse" } }
                );
            }

            this.contactSection.querySelectorAll('input, textarea, select').forEach(input => {
                input.addEventListener('focus', () => gsap.to(input, { scale: 1.02, borderColor: '#ff2d57', boxShadow: '0 0 0 4px rgba(255, 45, 87, 0.1)', duration: 0.3, ease: "power2.out" }));
                input.addEventListener('blur', () => gsap.to(input, { scale: 1, boxShadow: '0 0 0 0px rgba(255, 45, 87, 0)', duration: 0.3, ease: "power2.out" }));
            });

            this.contactSection.querySelectorAll('.absolute.w-72, .absolute.w-96').forEach((el, index) => {
                gsap.to(el, {
                    y: index === 0 ? 80 : -60, x: index === 0 ? -40 : 50, ease: "none",
                    scrollTrigger: { trigger: this.contactSection, start: "top bottom", end: "bottom top", scrub: 1.5 }
                });
            });
        }
    }

    // USER MANAGEMENT BADGE ANIMATION
    initUserManagementBadgeAnimation() {
        const badge = document.getElementById('user-management-badge');
        if (badge) {
            gsap.fromTo(badge,
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.4,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: badge,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }
    }

    // INDUSTRIES SECTION ANIMATION
    initIndustriesAnimation() {
        const section = document.getElementById('industries-section');
        const label = document.getElementById('industries-label');
        const words = section ? section.querySelectorAll('.ind-word, .ind-sep') : [];

        if (!section) return;

        // Label fade-in
        if (label) {
            gsap.fromTo(label,
                { opacity: 0, y: 8 },
                {
                    opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }

        // Words stagger fade-in from below
        if (words.length > 0) {
            gsap.fromTo(words,
                { opacity: 0, y: 18 },
                {
                    opacity: 1, y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }
    }

    // 9. SETUP PAGE ANIMATIONS
    initSetupAnimations() {
        // Steps Cards (1, 2, 3)
        const steps = document.querySelectorAll('.setup-step-card');
        if (steps.length > 0) {
            gsap.fromTo(steps, 
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out",
                    scrollTrigger: {
                        trigger: steps[0],
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // Technical Requirements Items
        const techItems = document.querySelectorAll('.tech-item');
        if (techItems.length > 0) {
            gsap.fromTo(techItems,
                { opacity: 0, x: -30 },
                {
                    opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: "power2.out",
                    scrollTrigger: {
                        trigger: techItems[0].closest('ul'),
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // No Music Section Animations
        const noMusicSection = document.getElementById('no-music-section');
        if (noMusicSection) {
            const noMusicBg = noMusicSection.querySelector('.no-music-bg');
            const noMusicPattern = noMusicSection.querySelector('.no-music-pattern');
            const noMusicTitle = noMusicSection.querySelector('.no-music-title');
            const noMusicText = noMusicSection.querySelector('.no-music-text');
            const noMusicBtn = noMusicSection.querySelector('.no-music-btn');

            // Background gradient animation on scroll
            if (noMusicBg) {
                gsap.fromTo(noMusicBg,
                    { opacity: 0 },
                    {
                        opacity: 1, duration: 1, ease: "power2.out",
                        scrollTrigger: {
                            trigger: noMusicSection,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }

            // Background pattern scale animation
            if (noMusicPattern) {
                gsap.fromTo(noMusicPattern,
                    { scale: 0.8, opacity: 0 },
                    {
                        scale: 1, opacity: 0.1, duration: 1.5, ease: "power2.out",
                        scrollTrigger: {
                            trigger: noMusicSection,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                // Parallax effect for pattern on scroll
                gsap.to(noMusicPattern, {
                    y: -50, ease: "none",
                    scrollTrigger: {
                        trigger: noMusicSection,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1
                    }
                });
            }

            // Title animation
            if (noMusicTitle) {
                gsap.fromTo(noMusicTitle,
                    { opacity: 0, y: 50, scale: 0.9 },
                    {
                        opacity: 1, y: 0, scale: 1, duration: 1, ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: noMusicSection,
                            start: "top 75%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }

            // Text animation
            if (noMusicText) {
                gsap.fromTo(noMusicText,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power3.out",
                        scrollTrigger: {
                            trigger: noMusicSection,
                            start: "top 75%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }

            // Button animation
            if (noMusicBtn) {
                gsap.fromTo(noMusicBtn,
                    { opacity: 0, scale: 0.8, y: 20 },
                    {
                        opacity: 1, scale: 1, y: 0, duration: 0.8, delay: 0.5, ease: "elastic.out(1, 0.7)",
                        scrollTrigger: {
                            trigger: noMusicSection,
                            start: "top 75%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }

            // Background image scroll scale (parallax zoom)
            const keineMusicBgImg = document.getElementById('keine-music-bg-img');
            if (keineMusicBgImg) {
                gsap.fromTo(keineMusicBgImg,
                    { scale: 1.1 },
                    {
                        scale: 1, ease: "none",
                        scrollTrigger: {
                            trigger: noMusicSection,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1.5
                        }
                    }
                );
            }
        }

        // QR Contact Section Animations
        const qrContactSection = document.getElementById('qr-contact-section');
        if (qrContactSection) {
            const qrContactBg = qrContactSection.querySelector('.qr-contact-bg');
            const qrContactPattern = qrContactSection.querySelector('.qr-contact-pattern');
            const qrContactQr = qrContactSection.querySelector('.qr-contact-qr');
            const qrContactTitle = qrContactSection.querySelector('.qr-contact-title');
            const qrContactPhone = qrContactSection.querySelector('.qr-contact-phone');
            const qrContactEmail = qrContactSection.querySelector('.qr-contact-email');

            // Background gradient animation on scroll
            if (qrContactBg) {
                gsap.fromTo(qrContactBg,
                    { opacity: 0 },
                    {
                        opacity: 1, duration: 1, ease: "power2.out",
                        scrollTrigger: {
                            trigger: qrContactSection,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }

            // Background pattern scale animation
            if (qrContactPattern) {
                gsap.fromTo(qrContactPattern,
                    { scale: 0.8, opacity: 0 },
                    {
                        scale: 1, opacity: 0.1, duration: 1.5, ease: "power2.out",
                        scrollTrigger: {
                            trigger: qrContactSection,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                // Parallax effect for pattern on scroll
                gsap.to(qrContactPattern, {
                    y: -50, ease: "none",
                    scrollTrigger: {
                        trigger: qrContactSection,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1
                    }
                });
            }

            // QR Code animation
            if (qrContactQr) {
                gsap.fromTo(qrContactQr,
                    { opacity: 0, x: -100, scale: 0.8 },
                    {
                        opacity: 1, x: 0, scale: 1, duration: 1, ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: qrContactSection,
                            start: "top 75%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }

            // Title animation
            if (qrContactTitle) {
                gsap.fromTo(qrContactTitle,
                    { opacity: 0, x: 50, scale: 0.9 },
                    {
                        opacity: 1, x: 0, scale: 1, duration: 1, delay: 0.2, ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: qrContactSection,
                            start: "top 75%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }

            // Phone text animation
            if (qrContactPhone) {
                gsap.fromTo(qrContactPhone,
                    { opacity: 0, x: 30 },
                    {
                        opacity: 1, x: 0, duration: 0.8, delay: 0.4, ease: "power3.out",
                        scrollTrigger: {
                            trigger: qrContactSection,
                            start: "top 75%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }

            // Email text animation
            if (qrContactEmail) {
                gsap.fromTo(qrContactEmail,
                    { opacity: 0, x: 30 },
                    {
                        opacity: 1, x: 0, duration: 0.8, delay: 0.6, ease: "power3.out",
                        scrollTrigger: {
                            trigger: qrContactSection,
                            start: "top 75%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }
        }
    }

    // 10. TYPEWRITER ANIMATION - WORTWEISE (auto-start)
    initTypewriter() {
        // Retry finding element if not immediately available
        let retries = 0;
        const maxRetries = 10;
        
        const tryInit = () => {
            const textElement = document.getElementById('typewriter-text');
            
            if (!textElement) {
                retries++;
                if (retries < maxRetries) {
                    console.log(`Typewriter element not found, retry ${retries}/${maxRetries}`);
                    setTimeout(tryInit, 200);
                } else {
                    console.warn('Typewriter element not found after retries');
                }
                return;
            }

            console.log('Typewriter element found, initializing...');

            const strings = [
                'welcomes you!',
                'ist viel mehr als nur Shopmusik.',
                'iniziert spontane Kaufimpulse.',
                'steigert den Umsatz.',
                'bietet Raum für zielorientiertes Audiomarketing.',
                'motiviert Ihr Team.',
                'eignet sich für alle Arten von Point of Sales.',
                'schafft die besten Bedingungen für angenehme Shoppingerlebnisse.'
            ];

            let stringIndex = 0;
            let wordIndex = 0;
            let isRunning = true;

            const type = () => {
                if (!isRunning || !textElement) {
                    console.log('Typewriter stopped: isRunning =', isRunning, 'textElement =', !!textElement);
                    return;
                }
                
                const currentString = strings[stringIndex];
                const words = currentString.split(' ');
                const typeSpeed = 300;

                // Display current words up to wordIndex
                textElement.textContent = words.slice(0, wordIndex + 1).join(' ');
                console.log(`Typewriter: String ${stringIndex + 1}/${strings.length}, Word ${wordIndex + 1}/${words.length}: "${words[wordIndex]}"`);

                wordIndex++;

                if (wordIndex >= words.length) {
                    // Finished current string, wait then move to next
                    setTimeout(() => {
                        if (isRunning && textElement) {
                            wordIndex = 0;
                            stringIndex = (stringIndex + 1) % strings.length;
                            textElement.textContent = '';
                            console.log(`Typewriter: Moving to string ${stringIndex + 1}`);
                            setTimeout(type, 100);
                        }
                    }, 2000);
                } else {
                    // Continue with next word
                    setTimeout(type, typeSpeed);
                }
            };

            // Start only when info-section is scrolled into view
            const infoSection = document.getElementById('info-section');
            let hasStarted = false;

            if (infoSection) {
                ScrollTrigger.create({
                    trigger: infoSection,
                    start: "top 80%",
                    onEnter: () => {
                        if (!hasStarted) {
                            hasStarted = true;
                            console.log('Typewriter started by scroll trigger!');
                            type();
                        }
                    }
                });
                console.log('Typewriter initialized with scroll trigger');
            } else {
                // Fallback: start immediately if section not found
                console.log('Info section not found, starting typewriter immediately');
                type();
            }
        };
        
        // Start trying to initialize
        tryInit();
    }

    // 11. PROGRAM SECTION ANIMATIONS
    initProgramAnimations() {
        // Animate program header text
        if (this.programHeaderText) {
            gsap.fromTo(this.programHeaderText,
                { opacity: 0, scale: 0.8, y: 30 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: this.programHeaderText,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }

        // Animate time column (fade in from left)
        if (this.programTimeCol) {
            gsap.fromTo(this.programTimeCol,
                { opacity: 0, x: -30 },
                {
                    opacity: 1, x: 0, duration: 0.6, ease: "power2.out",
                    scrollTrigger: {
                        trigger: this.programTimeCol,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // Animate calendar columns (simple fade in)
        if (this.programCalendars.length > 0) {
            this.programCalendars.forEach((calendar, index) => {
                gsap.fromTo(calendar,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1, y: 0, duration: 0.8, delay: index * 0.15, ease: "power2.out",
                        scrollTrigger: {
                            trigger: calendar,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        }

        // Animate individual program blocks (subtle fade + slide)
        if (this.programBlocks.length > 0) {
            this.programBlocks.forEach((block, index) => {
                gsap.fromTo(block,
                    { opacity: 0, y: 30, scale: 0.97 },
                    {
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        duration: 0.6,
                        delay: 0.2 + (index * 0.08),
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: block,
                            start: "top 90%",
                            end: "bottom 10%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                // Subtle hover effect
                block.addEventListener('mouseenter', () => {
                    gsap.to(block, { y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.2)", duration: 0.3, ease: "power2.out" });
                });
                block.addEventListener('mouseleave', () => {
                    gsap.to(block, { y: 0, boxShadow: "0 10px 15px rgba(0,0,0,0.1)", duration: 0.3, ease: "power2.out" });
                });
            });
        }

        // Animate badges (simple fade in from right)
        if (this.programBadges.length > 0) {
            this.programBadges.forEach((badge, index) => {
                gsap.fromTo(badge,
                    { opacity: 0, x: 30 },
                    {
                        opacity: 1, 
                        x: 0,
                        duration: 0.5,
                        delay: 0.3 + (index * 0.1),
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: badge,
                            start: "top 90%",
                            end: "bottom 10%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                // Minimal hover effect
                badge.addEventListener('mouseenter', () => {
                    gsap.to(badge, { scale: 1.05, duration: 0.2, ease: "power2.out" });
                });
                badge.addEventListener('mouseleave', () => {
                    gsap.to(badge, { scale: 1, duration: 0.2, ease: "power2.out" });
                });
            });
        }

        // Animate text boxes (simple fade in)
        if (this.programTextBoxes.length > 0) {
            this.programTextBoxes.forEach((box, index) => {
                gsap.fromTo(box,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1, y: 0, duration: 0.8, delay: index * 0.1, ease: "power2.out",
                        scrollTrigger: {
                            trigger: box,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        }

        // Animate music tracks (simple stagger from bottom)
        if (this.programTracks.length > 0) {
            this.programTracks.forEach((track, index) => {
                gsap.fromTo(track,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1, y: 0, duration: 0.5, delay: index * 0.1, ease: "power2.out",
                        scrollTrigger: {
                            trigger: track,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                // Add hover effect for card only
                track.addEventListener('mouseenter', () => {
                    gsap.to(track, { scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)", duration: 0.3, ease: "power2.out" });
                });
                track.addEventListener('mouseleave', () => {
                    gsap.to(track, { scale: 1, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)", duration: 0.3, ease: "power2.out" });
                });
            });
        }
    }

    // 12. HERO VIDEO SEQUENCE (4 Videos) - with retry logic
    initHeroVideoSequence() {
        let retries = 0;
        const maxRetries = 10;
        
        const tryInitVideos = () => {
            const video = document.getElementById('hero-video-player');
            const videoMobile = document.getElementById('hero-video-player-mobile');
            const setupVideo = document.getElementById('setup-hero-video-player');
            const setupVideoMobile = document.getElementById('setup-hero-video-player-mobile');
            const playBtn = document.getElementById('mobile-video-play-btn');
            const setupPlayBtn = document.getElementById('setup-mobile-video-play-btn');
            
            // Check if at least one video element exists
            if (!video && !videoMobile && !setupVideo && !setupVideoMobile) {
                retries++;
                if (retries < maxRetries) {
                    console.log(`Video elements not found, retry ${retries}/${maxRetries}`);
                    setTimeout(tryInitVideos, 200);
                } else {
                    console.warn('Video elements not found after retries');
                }
                return;
            }
            
            console.log('Video elements found, initializing...');
            
            // Combine all videos
            const videoConfigs = [
                { video: video, btn: null, isMobile: false, name: 'hero-desktop' },
                { video: videoMobile, btn: playBtn, isMobile: true, name: 'hero-mobile' },
                { video: setupVideo, btn: null, isMobile: false, name: 'setup-desktop' },
                { video: setupVideoMobile, btn: setupPlayBtn, isMobile: true, name: 'setup-mobile' }
            ];
            
            // Force play videos on mobile/tablet devices
            videoConfigs.forEach(({ video: v, btn, isMobile, name }) => {
                if (!v) return; // Skip if video element doesn't exist
                
                console.log(`Initializing video: ${name}`);
                
                // Try to play immediately
                const playPromise = v.play();
                
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        console.log(`Video ${name} startet automatisch`);
                        if (isMobile && btn) {
                            btn.classList.add('hidden');
                        }
                    }).catch(error => {
                        console.log(`Auto-play für ${name} verhindert:`, error);
                        
                        // Show play button for mobile video
                        if (isMobile && btn) {
                            btn.classList.remove('hidden');
                            
                            // Play on button click
                            btn.addEventListener('click', () => {
                                v.play().then(() => {
                                    btn.classList.add('hidden');
                                }).catch(e => console.error(`Video ${name} play fehler:`, e));
                            });
                        }
                        
                        // Fallback: Play on first user interaction
                        const playOnInteraction = () => {
                            v.play().then(() => {
                                if (isMobile && btn) {
                                    btn.classList.add('hidden');
                                }
                            }).catch(e => console.error(`Video ${name} play fehler:`, e));
                            document.removeEventListener('touchstart', playOnInteraction);
                            document.removeEventListener('click', playOnInteraction);
                        };
                        
                        document.addEventListener('touchstart', playOnInteraction, { once: true });
                        document.addEventListener('click', playOnInteraction, { once: true });
                    });
                }
                
                // Error handling for video loading
                v.addEventListener('error', function(e) {
                    console.error(`Video ${name} konnte nicht geladen werden. Pfad prüfen: ${v.querySelector('source')?.src}`);
                });
                
                // Ensure video is ready to play
                v.addEventListener('loadeddata', function() {
                    console.log(`Video ${name} geladen und bereit`);
                    // Try playing again once loaded
                    if (v.paused) {
                        v.play().catch(e => {
                            console.log(`Play nach loadeddata für ${name} verhindert:`, e);
                            if (isMobile && btn) {
                                btn.classList.remove('hidden');
                            }
                        });
                    }
                });
            });
        };
        
        // Start trying to initialize videos
        tryInitVideos();
    }

    // HERO MOBILE PADDING - Dynamisches Padding für Video
    initHeroMobilePadding() {
        const containers = [
            document.getElementById('hero-container-mobile'),
            document.getElementById('setup-hero-container-mobile')
        ].filter(c => c); // Nur vorhandene Container
        
        if (containers.length === 0) return;

        const setHeroPadding = () => {
            if (window.innerWidth < 1024) {
                // Video Höhe berechnen: 56.25% der Viewport-Breite (16:9 aspect ratio)
                const videoHeight = window.innerWidth * 0.5625;
                // Padding: 80px (Navigation) + Video-Höhe - 90px (minimaler Abstand)
                const paddingTop = 80 + videoHeight - 90;
                containers.forEach(container => {
                    container.style.paddingTop = paddingTop + 'px';
                });
            } else {
                containers.forEach(container => {
                    container.style.paddingTop = '0';
                });
            }
        };
        
        // Initial setzen
        setHeroPadding();
        
        // Bei Resize neu berechnen
        window.addEventListener('resize', setHeroPadding);
    }

    // INITIALIZE ALL ANIMATIONS
    init() {
        // Fade in body when ready
        try {
            gsap.to(document.body, {
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
                onComplete: () => {
                    document.body.classList.add('loaded');
                }
            });
        } catch (error) {
            console.error('GSAP animation error:', error);
            // Fallback if GSAP fails
            document.body.classList.add('loaded');
        }
        
        this.initNavbarAnimation();
        this.initHeroAnimations();
        this.initHeroMobilePadding();
        this.initInfoSectionAnimations();
        this.initWarumHeadingAnimation();
        this.initFeaturesAnimations();
        this.initPricingAnimations();
        this.initNavbarScroll();
        this.initBenefitsAnimations();
        this.initContactAnimations();
        this.initSetupAnimations();
        this.initProgramAnimations();
        this.initTypewriter();
        this.initHeroVideoSequence(); // Now only handles error logging
        this.initUserManagementBadgeAnimation();
        this.initIndustriesAnimation();
    }
}

// Initialize all animations (called after components are loaded)
function initAnimations() {
    const animations = new PageAnimations();
    animations.init();
}

// Export for component loader
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initAnimations };
}