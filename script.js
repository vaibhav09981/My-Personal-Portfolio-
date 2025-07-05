window.addEventListener('DOMContentLoaded', () => {
    const blackPage = document.getElementById('black-page');
    const cyanWhitePage = document.getElementById('cyan-white-page');

    // Function to apply transforms with proper prefixing for better cross-browser support
    const applyTransform = (element, transform) => {
        element.style.transform = transform;
        element.style.webkitTransform = transform;
    };

    // Trigger slide up after a short delay to ensure page is loaded
    setTimeout(() => {
        blackPage.classList.add('slide-up');
        applyTransform(cyanWhitePage, 'translateY(0)');
    }, 100); // small delay before animation starts

    // After slide-up animation ends, hide blackPage and trigger cyanWhitePage slide-up
    blackPage.addEventListener('transitionend', (event) => {
        if (event.propertyName === 'transform' && blackPage.classList.contains('slide-up')) {
            blackPage.style.display = 'none';

            // Trigger cyanWhitePage slide-up animation lasting 0.3s
            cyanWhitePage.classList.add('slide-up');
        }
    });

    // After cyanWhitePage slide-up animation ends, show lightGreyPage
    const lightGreyPage = document.getElementById('light-grey-page');

    cyanWhitePage.addEventListener('transitionend', (event) => {
        if (event.propertyName === 'transform' && cyanWhitePage.classList.contains('slide-up')) {
            lightGreyPage.style.transform = 'translateY(0)';
        }
    });

    // Handle window resize events for better responsiveness
    window.addEventListener('resize', () => {
        // Ensure proper positioning on resize
        if (blackPage.classList.contains('slide-up')) {
            applyTransform(cyanWhitePage, 'translateY(0)');
        }
    });

    // Handle orientation change specifically for mobile devices
    window.addEventListener('orientationchange', () => {
        // Small delay to allow the browser to complete the orientation change
        setTimeout(() => {
            if (blackPage.classList.contains('slide-up')) {
                applyTransform(cyanWhitePage, 'translateY(0)');
            }
        }, 50);
    });

    // Add passive touch event listeners for better mobile performance
    document.addEventListener('touchstart', () => {}, { passive: true });
    document.addEventListener('touchmove', () => {}, { passive: true });
});
