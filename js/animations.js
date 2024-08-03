document.addEventListener('DOMContentLoaded', () => {
    // GSAP animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animation
    gsap.from('.hero h1', {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.5
    });

    gsap.from('.hero p', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 1
    });

    // Bento grid animation
    gsap.from('.bento-item', {
        scrollTrigger: {
            trigger: '.bento-grid',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.2
    });

    // Skill bubbles animation
    const skillBubbles = document.querySelectorAll('.skill-bubble');
    skillBubbles.forEach((bubble, index) => {
        gsap.to(bubble, {
            y: -20,
            repeat: -1,
            yoyo: true,
            duration: 1 + (index * 0.1),
            ease: 'power1.inOut'
        });
    });

    // Parallax effect for background elements
    gsap.utils.toArray('.parallax').forEach(layer => {
        const depth = layer.dataset.depth;
        const movement = -(layer.offsetHeight * depth);
        gsap.fromTo(layer, {
            y: 0
        }, {
            y: movement,
            ease: 'none',
            scrollTrigger: {
                trigger: layer,
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    });
});